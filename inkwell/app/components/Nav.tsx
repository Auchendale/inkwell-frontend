"use client";
import { UserContext } from "@/contexts/user-context";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

type LetterType = {
  _id: string;
  sender: string;
  recipient: string;
  content: {
    letter: string;
  };
  is_opened: boolean;
  is_saved: boolean;
  date_sent: string;
};

const Nav = () => {
  const { user } = useContext(UserContext);
  const [unreadLetters, setUnreadLetters] = useState<Array<LetterType>>([]);

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
    <nav className="flex gap-8 p-4 border-none shadow-lg flex-wrap">
      <Link
        href="/"
        className="text-lg font-semibold hover:text-blue-500 transition-all duration-300"
      >
        Home
      </Link>
      <Link
        href="/log-in"
        className="text-lg font-semibold hover:text-blue-500 transition-all duration-300"
      >
        Change User
      </Link>
      <Link
        href="/bulletin-page"
        className="text-lg font-semibold hover:text-blue-500 transition-all duration-300"
      >
        Bulletin Board
      </Link>
      {user.username ? (
        <div className="flex items-center gap-2">
          <Link
            href="/user"
            className="text-lg font-semibold hover:text-blue-500 transition-all duration-300"
          >
            Welcome {user.username}
          </Link>
          {unreadLetters.length > 0 && (
            <span className="text-sm text-red-500 font-medium">
              ({unreadLetters.length} unread letter
              {unreadLetters.length > 1 ? "s" : ""})
            </span>
          )}
        </div>
      ) : null}
      <Link
        href="/"
        className="text-lg font-semibold hover:text-blue-500 transition-all duration-300"
      >
        Log Out
      </Link>
    </nav>
  );
};

export default Nav;
