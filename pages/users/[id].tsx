import { NextPage } from "next";
import Breadcum from "../../components/Breadcum";
import Card from "../../components/Card";
import AddUserForm from "../../containers/AddUserForm";
import { IUser } from "../../controllers/User";
import UsersService from "../../services/UserService";

export const getStaticPaths = async () => {
  const { data: users } = await UsersService.fetchUsers();
  const paths = users.map((user: IUser) => ({
    params: { id: user._id.toString() },
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

  const formInitialPayload = {
    name: user.name,
    email: user.email,
    address: user.address,
  };

  const onEditUser = async (payload: any) => {
    await UsersService.update(user._id, payload);
  };

  // TODO: Show alert on user update
  return (
    <div>
      <Card>
        <AddUserForm
          onUserSave={onEditUser}
          formInitialState={formInitialPayload}
        />
      </Card>
    </div>
  );
};

export default ProfilePage;
