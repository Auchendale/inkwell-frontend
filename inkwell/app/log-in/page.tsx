"use client";
import { UserContext } from "../../contexts/user-context";
import { useContext, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Link from "next/link";
const usersData = require("../../data/users-data");

export default function LogIn() {
  const [users, setUsers] = useState(usersData);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Nav />
      <Header />
      <h1 className="text-center text-2xl">Select a user:</h1>
      <div className="grid grid-cols-3 gap-1 justify-evenly p-20">
        {users.map(
          (user: {
            username: string;
            email: string;
            user_icon_url?: string;
            friends: string[];
            location: { country: string; lat: number; long: number };
          }) => {
            return (
              <div
                className="m-5 bg-gray-800 shadow-2xl rounded-xl flex place-content-center p-2"
                onClick={() => {
                  setUser({ name: user.username, email: user.email });
                }}
                key={user.username}
              >
                <Link href="/user">
                  <img
                    className="h-20 w-20 rounded-full object-cover"
                    src={user.user_icon_url}
                    alt=""
                  />
                </Link>
                <p>{user.username}</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
