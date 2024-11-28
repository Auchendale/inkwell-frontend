"use client";
import Link from "next/link";
import UserDetails from "./UserDetails";
import { useState } from "react";

const UserBtns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="p-5 my-5 gap-10 grid grid-cols-2">
      <Link href={"/new-letter"}>
        <button className="w-full p-3 text-center bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600">
          Write a new letter
        </button>
      </Link>
      <Link href={"/new-post"}>
        <button className="w-full p-3 text-center bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600">
          Post on the bulletin board
        </button>
      </Link>
      <Link href={"./all-letters"}>
        <button className="w-full p-3 text-center bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-600">
          All letters
        </button>
      </Link>
      <Link href={"/bulletin-page"}>
        <button className="w-full p-3 text-center bg-gray-500 text-white rounded-md shadow-lg hover:bg-gray-600">
          View bulletin board
        </button>
      </Link>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="w-1/2 p-3 text-center bg-indigo-500 text-white rounded-md shadow-lg hover:bg-indigo-600"
          onClick={toggleDropdown}
        >
          User info
        </div>
        <div
          tabIndex={0}
          className={`absolute left-0 bottom-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-[1] p-3 transition-all duration-300 ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default UserBtns;
