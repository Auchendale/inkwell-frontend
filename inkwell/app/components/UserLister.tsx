"use client";
import { useEffect, useState } from "react";
import UserBox from "./UserBox";
import axios from "axios";
// const usersData = require("../../data/users-data");

type UserType = {
  username: string;
  email: string;
  user_icon_url: string | undefined;
  friends: string[];
  location: { country: string; lat: number; long: number };
};

const UserLister = () => {
  const [users, setUsers] = useState([
    {
      username: "",
      email: "",
      user_icon_url: undefined,
      friends: [],
      location: { country: "", lat: 0, long: 0 },
    },
  ]);

  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
