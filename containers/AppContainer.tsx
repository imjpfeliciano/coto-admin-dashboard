'use client';
import { signIn, useSession } from 'next-auth/react';
import Navbar from '../components/V2/Navbar';
import Sidebar from '../components/V2/Sidebar';
import SidebarRoutes from '../constants/sidebar';
import '../styles/globals.css';

const SIDEBAR_ROUTES = SidebarRoutes;

interface Props {
  children: React.ReactNode;
  session?: any;
}

const LoggedInLayout = ({ children }: any) => {
  return (
    <div className='flex h-screen'>
      <Sidebar options={SIDEBAR_ROUTES} />
      <div className='flex flex-col w-full bg-red-300'>
        <Navbar />
        <div className='p-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

const NotLoggedInLayout = () => {
  return (
    <div>
      <h1>Not Logged In</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

const AppContainer = ({ children, pageProps }: any) => {
  const { data: session, status } = useSession();

  if (!session) {
    return <NotLoggedInLayout />;
  }

  return (
    <LoggedInLayout>
      {children}
    </LoggedInLayout>
  );
};

export default AppContainer;