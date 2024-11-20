import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 shadow">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/log-in" className="hover:text-blue-500">
        Log In
      </Link>
      <Link href="/dashboard" className="hover:text-blue-500">
        Dashboard
      </Link>
      <Link href="/aboutus" className="hover:text-blue-500">
        About Us
      </Link>
    </nav>
  );
};

export default Nav;
