"use client";
import { useEffect, useState } from "react";
import UserBox from "./UserBox";
import axios from "axios";
import LoadingBar from "./LoadingBar";

type UserType = {
  username: string;
  email: string;
  user_icon_url: string | undefined;
  friends: string[];
  location: { country: string; lat: number; long: number };
};

const UserLister = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/users")
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <section>
      <h1 className="text-center text-2xl">Select a user:</h1>
      <div className="grid grid-cols-3 gap-1 justify-evenly p-18">
        {users.map((singleUser: UserType) => {
          return <UserBox singleUser={singleUser} key={singleUser.username} />;
        })}
      </div>
    </section>
  );
};

export default UserLister;
