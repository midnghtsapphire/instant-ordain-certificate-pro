
import { supabase } from '@/lib/supabase'

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  features: string[]
  stripePriceId: string
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic Minister',
    price: 0,
    features: ['Universal Minister Certificate', 'Basic PDF download', 'Email support'],
    stripePriceId: ''
  },
  {
    id: 'professional',
    name: 'Professional Minister', 
    price: 29.99,
    features: ['Everything in Basic', '5 premium templates', 'Physical certificate'],
    stripePriceId: 'price_professional'
  },
  {
    id: 'premium',
    name: 'Premium Minister Pro',
    price: 59.99,
    features: ['Everything in Professional', 'Custom branding', 'Phone support'],
    stripePriceId: 'price_premium'
  }
]

export const createCheckoutSession = async (priceId: string) => {
  const { data, error } = await supabase.functions.invoke('create-checkout-session', {
    body: { priceId }
  })
  
  if (error) throw error
  return data
}

export const getUserSubscription = async (userId: string) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()
    
  if (error && error.code !== 'PGRST116') throw error
  return data
}
