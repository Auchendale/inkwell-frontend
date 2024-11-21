"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts/user-context";

const UserDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="p-20 border-4 border-black">
      <h2>User Details:</h2>
      <p>
        Profile image:
        <img
          className="max-w-xl rounded-full"
          src={user.img}
          alt="User profile image"
        />
      </p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <ul>
        Friends:
        {user.friends.map((friend) => {
          return (
            <li className="list-disc" key={friend}>
              {friend}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UserDetails;
