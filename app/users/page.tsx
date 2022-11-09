"use client"
import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Card from "../../components/Card";
import MaterialIcon from "../../components/MaterialIcon";
import UserRowItem from "../../components/Users/UserRowItem";
import { IUser } from "../../types/user";
import UsersLoading from "./loading";
import { DEFAULT_PAGE_LIMIT } from "../../constants/paginator";

const fetchUsers = async (page: number) => {
  // FIXME: Load base endpoint from env
  const res = await fetch(`http://localhost:3000/api/users?page=${page}`);
  const { data, count } = await res.json();

  return [data, count];
};

const UsersPage = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const [data, count] = await fetchUsers(activePage);
      setUsers(data);
      setCount(count);
    };

    fetch();
  }, [activePage])

  const lastPage = Math.ceil(count / DEFAULT_PAGE_LIMIT);
  const lowerBound = (activePage - 1) * DEFAULT_PAGE_LIMIT + 1;
  const upperBound = (activePage * DEFAULT_PAGE_LIMIT) > count ? count : (activePage * DEFAULT_PAGE_LIMIT);

  return (
    <>
      <Card>
        <div className="pb-2 mb-2 border-b-2 flex flex-row justify-between align-center">
          <h1 className="text-xl font-bold">Lista de Usuarios</h1>
          <Link href="/users/add" className="flex justify-center align-center bg-purple-600 rounded-full px-4 py-1 hover:bg-purple-500 text-white">
            <MaterialIcon iconName="add" color="white" />
            Agregar
          </Link>
        </div>
        <Suspense fallback={<UsersLoading />}>
          {users.map((user: IUser) => <UserRowItem key={user._id} {...user} />)}

        </Suspense>
      </Card>

      <div
        className="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between">
        <span className="text-xs xs:text-sm text-gray-900">
          Showing {lowerBound} to {upperBound} of {count} Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">

          <button
            className="disabled:opacity-75 text-sm bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
            onClick={() => setActivePage(activePage - 1)}
            disabled={activePage === 1}
          >
            Prev
          </button>

          <button
            className="disabled:opacity-75 text-sm bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
            onClick={() => setActivePage(activePage + 1)}
            disabled={activePage === lastPage}
          >
            Next
          </button>

        </div>
      </div>

    </>
  );
}

export default UsersPage;