
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have real values
export const supabase = supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')
  ? null
  : createClient(supabaseUrl, supabaseAnonKey)

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabase !== null
}
