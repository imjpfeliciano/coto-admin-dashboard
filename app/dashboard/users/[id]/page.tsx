import Link from 'next/link';
import Card from '../../../../components/Card';
import MaterialIcon from '../../../../components/MaterialIcon';
import UserForm from '../../../../components/Users/Form';
import { BASE_API_URL } from '../../../constants';

const fetchUserDetails = async (id: string) => {
  const res = await fetch(`${BASE_API_URL}/v1/api/users/${id}`);
  const { user } = await res.json();

  return user;
};

interface ProfilePageProps {
  params: any;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = params;

  const user = await fetchUserDetails(id);

  return (
    <Card>
      <div className='pb-2 mb-2 border-b-2 flex flex-row justify-between align-center'>
        <h1 className='text-xl font-bold'>Datos del Usuario</h1>
        <Link href='/users'>
          <MaterialIcon iconName='close' className='text-gray-500' />
        </Link>
      </div>
      <UserForm newUser={false} userId={id} user={user} />
    </Card>
  );
};

export default ProfilePage;
