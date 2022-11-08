import { Suspense } from "react";
import LoadingProfile from "./loading";

const fetchUserDetails = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await res.json();

  return user;
};

const ProfilePage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserDetails(id);
  const { name } = user;
  return (
    <Suspense fallback={<LoadingProfile />}>
      <div>
        <h1>{name}</h1>
      </div>
    </Suspense>
  );
};

export default ProfilePage;