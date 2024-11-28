"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";
import Image from "next/image";
import LoadingBar from "./LoadingBar";
const emptyBox0 = require("../../assets/emptyBox0.png");
const emptyBox1 = require("../../assets/emptyBox1.png");
const emptyBox2 = require("../../assets/emptyBox2.png");
const emptyBox3 = require("../../assets/emptyBox3.png");
const emptyBox4 = require("../../assets/emptyBox4.png");
const letterInBox1 = require("../../assets/letterInBox1.png");
const letterInBox2 = require("../../assets/letterInBox2.png");
const letterInBox3 = require("../../assets/letterInBox3.png");

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

const emptyLetter = {
  _id: "skoo",
  sender: "skoo",
  recipient: "skoo",
  content: {
    letter: "skoo",
  },
  is_opened: true,
  is_saved: false,
  date_sent: "skoo",
};

const LetterViewer = () => {
  const [letters, setLetters] = useState<Array<LetterType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  const shuffle = (array: LetterType[]) => {
    const shuffled = array.slice();
    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    return shuffled;
  };

  const randomEmptyBox = () => {
    const arr = [
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox3,
      emptyBox3,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox0,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox1,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox2,
      emptyBox3,
      emptyBox3,
      emptyBox4,
    ];
    const item = arr[Math.floor(Math.random() * arr.length)];
    return item;
  };

  const randomLetter = () => {
    const arr = [letterInBox1, letterInBox2, letterInBox3];
    const item = arr[Math.floor(Math.random() * arr.length)];
    return item;
  };
  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/letters", {
        params: {
          recipient: user.username,
          is_opened: false,
        },
      })
      .then((res) => {
        const letterArray: Array<LetterType> = [...res.data.letters];
        while (letterArray.length < 21) {
          letterArray.push(emptyLetter);
        }
        const shuffledArr = shuffle(letterArray);
        setLetters(shuffledArr);
        setIsLoading(false);
      })
      .catch((err) => err);
  }, []);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <div className="border-4 border-amber-900">
      <ul className="grid grid-cols-7 grid-rows-3 gap-5 bg-yellow-900">
        {letters.map((letter: LetterType, index: number) => {
          return (
            <>
              {letter.is_opened === false ? (
                <li key={letter._id} className="border border-amber-900	">
                  <Link href={`/view-letter/${letter._id}`}>
                    <Image
                      src={randomLetter()}
                      alt="Hand-drawn pigeon hole with letter inside"
                      width={500}
                    />
                  </Link>
                </li>
              ) : (
                <li
                  key={`emptybox${index}`}
                  className="border border-amber-900"
                >
                  <Image
                    src={randomEmptyBox()}
                    alt="Hand-drawn empty pigeon hole"
                    width={500}
                  />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default LetterViewer;
