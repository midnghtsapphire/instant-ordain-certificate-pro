
import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string, userData: any) => Promise<any>
  signIn: (email: string, password: string) => Promise<any>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured() || !supabase) {
      console.warn('Supabase is not configured. Authentication will be disabled.')
      setLoading(false)
      return
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, userData: any) => {
    if (!isSupabaseConfigured() || !supabase) {
      console.error('Supabase is not configured. Please set up Supabase integration.')
      return { 
        data: null, 
        error: { 
          message: 'Authentication service is not configured. Please contact support.' 
        } 
      }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })
      return { data, error }
    } catch (error) {
      console.error('SignUp error:', error)
      return { 
        data: null, 
        error: { 
          message: 'An error occurred during sign up. Please try again.' 
        } 
      }
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured() || !supabase) {
      console.error('Supabase is not configured. Please set up Supabase integration.')
      return { 
        data: null, 
        error: { 
          message: 'Authentication service is not configured. Please contact support.' 
        } 
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      return { data, error }
    } catch (error) {
      console.error('SignIn error:', error)
      return { 
        data: null, 
        error: { 
          message: 'An error occurred during sign in. Please try again.' 
        } 
      }
    }
  }

  const signOut = async () => {
    if (!isSupabaseConfigured() || !supabase) {
      console.error('Supabase is not configured.')
      return
    }
    
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error('SignOut error:', error)
    }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
