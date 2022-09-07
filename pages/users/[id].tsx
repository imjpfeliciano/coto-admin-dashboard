import { NextPage } from "next";
import { IUser } from "../../controllers/User";
import UsersService from "../../services/UserService";

export const getStaticPaths = async () => {
  const users: IUser[] = await UsersService.fetchUsers();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  let user = null;
  let error = null;
  try {
    const { id } = context.params;
    user = await UsersService.fetchUser(id);
  } catch (error) {
    error = JSON.stringify(error);
  }

  return {
    props: {
      user,
      error,
    },
  };
};

interface ProfilePageProps {
  user: IUser;
  error: string;
}

// NOTE: Profile page for a user
const ProfilePage: NextPage<ProfilePageProps> = ({ user, error }) => {
  if (error) return null;
  
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default ProfilePage;
