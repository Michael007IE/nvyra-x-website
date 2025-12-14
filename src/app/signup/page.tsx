'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import BrandLogo from '@/components/ui/brand-logo'
import { SocialAuthButtons } from '@/components/ui/social-auth'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Password Validation Logic
  const validatePassword = (pwd: string) => {
    const minLength = 12
    const hasUpperCase = /[A-Z]/.test(pwd)
    const hasLowerCase = /[a-z]/.test(pwd)
    const hasNumber = /[0-9]/.test(pwd)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd)

    if (pwd.length < minLength) return "Password must be at least 12 characters long."
    if (!hasUpperCase) return "Password must contain at least one capital letter."
    if (!hasLowerCase) return "Password must contain at least one lowercase letter."
    if (!hasNumber) return "Password must contain at least one number."
    if (!hasSpecialChar) return "Password must contain at least one special character."

    return null
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Check password validity
    const passwordError = validatePassword(password)
    if (passwordError) {
      setError(passwordError)
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })

      if (error) {
        throw error
      }

      router.push('/login?message=Check email to continue sign in process')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10" />

      <div className="absolute top-8 left-8">
        <Link href="/">
           <BrandLogo />
        </Link>
      </div>
      
      <div className="w-full max-w-md space-y-8 bg-black/50 p-8 border border-white/10 backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-tight">Create an account</h2>
          <p className="mt-2 text-sm text-gray-400">Enter your details below to create your account</p>
        </div>

        <div className="space-y-4">
           <SocialAuthButtons />
           
           <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be 12+ chars, include uppercase, lowercase, number, and special char.
              </p>
            </div>

            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
              style={{ backgroundColor: '#002BFF' }}
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign Up'}
            </button>
          </form>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="underline hover:text-white transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
