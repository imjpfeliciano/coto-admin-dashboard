'use client'

import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient({})
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'https://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className='flex'>
      {
        session === null
          ? (
            <button onClick={handleSignIn} className='bg-green-500 text-white rounded px-2 py-1'>
              Sign In
            </button>
            )
          : (
            <button onClick={handleSignOut} className='bg-red-500 text-white rounded px-2 py-1'>
              Sign Out
            </button>
            )
        }

    </div>
  )
}
