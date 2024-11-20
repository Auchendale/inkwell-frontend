"use client";
import { UserContext } from "../../contexts/user-context";
import { useContext, useState } from "react";
const usersData = require("../../data/users-data");

export default function LogIn() {
  const [users, setUsers] = useState(usersData);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Log In</h1>
      <p>Welcome {user.name}...</p>
      <div className="grid grid-cols-3 gap-1 justify-evenly">
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
                className="m-5"
                onClick={() => {
                  setUser({ name: user.username, email: user.email });
                }}
                key={user.username}
              >
                <img
                  className="max-h-28 size-28 rounded-full "
                  src={user.user_icon_url}
                  alt=""
                />
                <p>{user.username}</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
