import { useSession } from 'next-auth/react';
import Link from 'next/link';
import MaterialIcon from '../../MaterialIcon';

const Navbar = () => {
  const { data: session } = useSession();
  const { user }: any = session;

  return (
    <div className="flex flex-row justify-between shadow-lg p-4 bg-white">
      <Link href="/" className="font-bold">Coto Dashboard v1.0</Link>

      <div className="flex align-center justify-center">
        <MaterialIcon iconName="notifications" />
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default Navbar;