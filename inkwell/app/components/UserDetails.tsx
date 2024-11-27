"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts/user-context";

const UserDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="w-full sm:w-96 md:w-128 p-4 sm:p-8 md:p-12 border-4 border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        User Details
      </h2>
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700">
          Profile image:
          <img
            className="max-w-xl rounded-full"
            src={user.img}
            width={120}
            height={120}
            alt="User profile image"
          />
        </p>
      </div>

      <p className="text-lg text-gray-800 mb-2">Username: {user.username}</p>
      <p className="text-lg text-gray-800 mb-2">Email: {user.email}</p>
      <ul className="mt-4">
        <p className="text-lg text-gray-800 mb-2">Friends:</p>
        {user.friends.map((friend) => {
          return (
            <li
              className="list-disc text-gray-700 mb-2 hover:text-blue-600 transition-colors"
              key={friend}
            >
              {friend}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UserDetails;
