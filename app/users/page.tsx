import Link from "next/link";
import { Suspense } from "react";
import Card from "../../components/Card";
import MaterialIcon from "../../components/MaterialIcon";
import UserRowItem from "../../components/Users/UserRowItem";
import { IUser } from "../../types/user";
import UsersLoading from "../loading";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const { data, count } = await res.json();

  return [data, count];
};


const UsersPage = async () => {
  const [users, count] = await fetchUsers();

  return (
    <Suspense fallback={<UsersLoading />}>
      <Card>
        <div className="pb-2 mb-2 border-b-2 flex flex-row justify-between align-center">
          <h1 className="text-xl font-bold">Lista de Usuarios</h1>
          <Link href="/users/add" className="flex justify-center align-center bg-purple-600 rounded-full px-4 py-1 hover:bg-purple-500 text-white">
            <MaterialIcon iconName="add" color="white" />
            Agregar
          </Link>
        </div>
        {users.map((user: IUser) => <UserRowItem key={user._id} {...user} />)}
      </Card>

      {/* TODO: Implement new paginator */}
      <span className="flex w-1/2 m-auto align-center justify-center items-center">{count}</span>
    </Suspense>

  );
}

export default UsersPage;