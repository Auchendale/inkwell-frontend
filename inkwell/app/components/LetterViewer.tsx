"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";

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

const LetterViewer = () => {
  const [letters, setLetters] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/letters", {
        params: {
          recipient: user.username,
        },
      })
      .then((res) => {
        setLetters(res.data.letters);
      })
      .catch((err) => err);
  }, [letters, user.username]);

  return (
    <ul className="grid grid-cols-3 gap-5 justify-evenly">
      {letters.map((letter: LetterType) => {
        return (
          <li key={letter._id} className="border flex flex-col text-center">
            <Link href={`/view-letter/${letter._id}`}>
              <img
                src="https://img.freepik.com/premium-vector/envelope-icon-cartoon-illustration-envelope-vector-icon-web_96318-33446.jpg"
                alt={`letter from ${letter.sender}`}
              />
            </Link>
            <p>{`From: ${letter.sender}`}</p>
            <p>{`Date: ${letter.date_sent}`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default LetterViewer;
