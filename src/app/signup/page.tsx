'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import BrandLogo from '@/components/ui/brand-logo'
import { SocialAuthButtons } from '@/components/ui/social-auth'
import Image from 'next/image'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  // Track password requirements
  const [pwdReqs, setPwdReqs] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  })
  const [isPwdFocused, setIsPwdFocused] = useState(false)

  const router = useRouter()
  const supabase = createClient()

  // Update password requirements state
  const handlePasswordChange = (val: string) => {
    setPassword(val)
    setPwdReqs({
      length: val.length >= 12,
      upper: /[A-Z]/.test(val),
      lower: /[a-z]/.test(val),
      number: /[0-9]/.test(val),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(val)
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Final validation check
    if (!pwdReqs.length || !pwdReqs.upper || !pwdReqs.lower || !pwdReqs.number || !pwdReqs.special) {
      setError("Please meet all password requirements.")
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
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="absolute top-0 left-8 md:fixed md:top-8 md:left-8">
          <Link href="/">
            <BrandLogo />
          </Link>
        </div>
        
        <div className="w-full max-w-md space-y-8 bg-black/50 p-8 border border-white/10 backdrop-blur-sm mt-20 md:mt-0">
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
              <div className="relative flex justify-center text-xs">
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
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  onFocus={() => setIsPwdFocused(true)}
                  required
                  className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
                
                {/* Password Requirements Checklist */}
                {(isPwdFocused || password.length > 0) && (
                  <div className="text-xs space-y-1 mt-2 p-3 bg-white/5 rounded-md border border-white/10">
                    <p className="font-medium mb-1 text-gray-300">Password Requirements:</p>
                    <div className={`flex items-center gap-2 ${pwdReqs.length ? 'text-green-400' : 'text-gray-500'}`}>
                      <span>{pwdReqs.length ? '✓' : '○'}</span> 12+ characters
                    </div>
                    <div className={`flex items-center gap-2 ${pwdReqs.upper ? 'text-green-400' : 'text-gray-500'}`}>
                      <span>{pwdReqs.upper ? '✓' : '○'}</span> At least one uppercase letter
                    </div>
                    <div className={`flex items-center gap-2 ${pwdReqs.lower ? 'text-green-400' : 'text-gray-500'}`}>
                      <span>{pwdReqs.lower ? '✓' : '○'}</span> At least one lowercase letter
                    </div>
                    <div className={`flex items-center gap-2 ${pwdReqs.number ? 'text-green-400' : 'text-gray-500'}`}>
                      <span>{pwdReqs.number ? '✓' : '○'}</span> At least one number
                    </div>
                    <div className={`flex items-center gap-2 ${pwdReqs.special ? 'text-green-400' : 'text-gray-500'}`}>
                      <span>{pwdReqs.special ? '✓' : '○'}</span> At least one special character
                    </div>
                  </div>
                )}
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
    </div>
  )
}