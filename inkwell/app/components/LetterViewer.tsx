"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";
import Image from "next/image";

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
  // const [isClicked, setIsClicked] = useState(false);
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

  // const toggleImage = (event: unknown) => {
  //   setIsClicked(true);
  //   if (event) {
  //     event.target.src =
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MwAVC7tp1X4t0WX9awgt7-PGAi7vkz9jfg&s";
  //   } else {
  //     event.target.src =
  //       "https://img.freepik.com/premium-vector/envelope-icon-cartoon-illustration-envelope-vector-icon-web_96318-33446.jpg";
  //   }
  //   letter.is_read = true;
  // };

  return (
    <ul className="grid grid-cols-3 gap-5 justify-evenly">
      {letters.map((letter: LetterType) => {
        return (
          <li key={letter._id} className="border flex flex-col text-center">
            <Link href={`/view-letter/${letter._id}`}>
              <Image
                src={require("../../assets/closed_letter_sealed1.png")}
                alt={`letter from ${letter.sender}`}
                // onClick={toggleImage}
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
