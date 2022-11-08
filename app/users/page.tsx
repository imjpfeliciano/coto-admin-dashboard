import Link from "next/link";
import { Suspense } from "react";
import { IconButton } from "../../components/Button";
import Card from "../../components/Card";
import MaterialIcon from "../../components/MaterialIcon";
import UserRowItem from "../../components/Users/UserRowItem";
import UsersLoading from "../loading";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const { data } = await res.json();

  return data;
};


const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <Suspense fallback={<UsersLoading />}>
      <div>


        <Card>
          <div className="pb-2 mb-2 border-b-2 flex flex-row justify-between align-center">
            <h1>Users</h1>
            <Link href="/users/add" className="flex justify-center align-center bg-purple-600 rounded-full px-2 py-1 hover:bg-purple-500 text-white">
              <MaterialIcon iconName="add" color="white" />
              Agregar
            </Link>
          </div>

          {users.map(user => <UserRowItem key={user._id} {...user} />)}
        </Card>
      </div>

    </Suspense>

  );
}

export default UsersPage;