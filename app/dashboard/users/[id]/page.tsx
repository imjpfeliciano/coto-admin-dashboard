'use client';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import Card from '../../../../components/Card';
import MaterialIcon from '../../../../components/MaterialIcon';
import UserForm from '../../../../components/Users/Form';
import { BaseUserRequest } from '../../../../types/user';
import LoadingProfile from './loading';

const fetchUserDetails = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await res.json();

  return user;
};

interface ProfilePageProps {
  params: any;
}

const initialState: BaseUserRequest = {
  name: '',
  lastname: '',
  email: '',
  address: ''
};

const ProfilePage = ({ params }: ProfilePageProps) => {
  const { id } = params;

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchUserDetails(id);
      const formState = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        address: user.address
      };

      setUser(formState);
    };

    fetchUser();
  }, [id]);

  return (
    <Suspense fallback={<LoadingProfile />}>
      <Card>
        <div className="pb-2 mb-2 border-b-2 flex flex-row justify-between align-center">
          <h1 className="text-xl font-bold">Datos del Usuario</h1>
          <Link href="/users">
            <MaterialIcon iconName="close" className="text-gray-500" />
          </Link>
        </div>
        <UserForm
          newUser={false}
          userId={id}
        />
      </Card>
    </Suspense>
  );
};

export default ProfilePage;