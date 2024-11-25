"use client";
import { UserContext } from "@/contexts/user-context";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [unreadLetters, setUnreadLetters] = useState([]);

  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/letters", {
        params: {
          recipient: user.username,
          is_opened: false,
        },
      })
      .then((res) => {
        setUnreadLetters(res.data.letters);
      })
      .catch((err) => err);
  }, [user.username]);

  return (
    <nav className="flex gap-8 p-4 dark:bg-gray-800 shadow">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/log-in" className="hover:text-blue-500">
        Change User
      </Link>
      <Link href="/bulletin-page" className="hover:text-blue-500">
        Bulletin Board
      </Link>
      {user.username ? (
        <Link href="/user" className="hover:text-blue-500">
          Welcome {user.username}
          {unreadLetters.length > 0 ? (
            <p>{unreadLetters.length} unread letter(s)</p>
          ) : null}
        </Link>
      ) : null}
      <Link href="/" className="hover:text-blue-500">
        Log Out
      </Link>
    </nav>
  );
};

export default Nav;
