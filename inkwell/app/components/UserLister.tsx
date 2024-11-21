"use client";
import { useState } from "react";
import UserBox from "./UserBox";
const usersData = require("../../data/users-data");

type UserType = {
  username: string;
  email: string;
  user_icon_url: string | undefined;
  friends: string[];
  location: { country: string; lat: number; long: number };
};

const UserLister = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <section>
      <h1 className="text-center text-2xl">Select a user:</h1>
      <div className="grid grid-cols-3 gap-1 justify-evenly p-20">
        {users.map((singleUser: UserType) => {
          return <UserBox singleUser={singleUser} key={singleUser.username} />;
        })}
      </div>
    </section>
  );
};

export default UserLister;
