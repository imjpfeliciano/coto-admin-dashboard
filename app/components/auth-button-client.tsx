'use client';

import {
  createClientComponentClient,
  type Session,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { BASE_API_URL } from '../constants';

export const dynamic = 'force-dynamic';
const redirectCallbackUrl = `${BASE_API_URL}/auth/callback`;

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient({});
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: redirectCallbackUrl,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className='flex'>
      {session === null ? (
        <button
          onClick={handleSignIn}
          className='bg-green-500 text-white rounded px-2 py-1'
        >
          Sign In - {redirectCallbackUrl}
        </button>
      ) : (
        <button
          onClick={handleSignOut}
          className='bg-red-500 text-white rounded px-2 py-1'
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
