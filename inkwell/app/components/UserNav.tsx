import Link from "next/link";
import React from "react";

const UserNav = () => {
  return (
    <nav className="border py-2 justify-between text-center bg-gray-500">
      <Link href={"/user"} className="mx-5 text-white hover:text-blue-800">
        User
      </Link>
      <Link
        href={"/new-letter"}
        className="mx-5 text-white hover:text-blue-800"
      >
        Write a new letter
      </Link>
      <Link
        href={"/new-post"}
        className="mx-5 text-white hover:text-blue-800"
      >
        New post
      </Link>
    </nav>
  );
};

export default UserNav;
