
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { AuthButton } from '../../../app/components/auth-button-client'
import MaterialIcon from '../../MaterialIcon'

const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const user = {
    name: 'Coto'
  }

  return (
    <div className='flex flex-row justify-between shadow-lg p-4 bg-white'>
      <Link href='/' className='font-bold'>Coto Dashboard v1.0</Link>

      <div className='flex align-center justify-center'>
        <MaterialIcon iconName='notifications' />
        <span>{user.name}</span>
        <AuthButton session={session} />
      </div>
    </div>
  )
}

export default Navbar
