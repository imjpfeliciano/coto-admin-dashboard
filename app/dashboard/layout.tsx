import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Navbar from '../../components/V2/Navbar';
import Sidebar from '../../components/V2/Sidebar';
import SidebarRoutes from '../../constants/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar options={SidebarRoutes} />
        <div className='w-full px-4 py-6 bg-slate-200'>{children}</div>
      </div>
    </div>
  );
}
