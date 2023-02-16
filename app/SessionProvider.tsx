'use client';
import { SessionProvider } from 'next-auth/react';

const AppSessionProvider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default AppSessionProvider;