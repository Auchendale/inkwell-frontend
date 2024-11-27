"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";
import Image from "next/image";
import { getAllLetters } from "@/utils/api-requests";
import LoadingBar from "./LoadingBar";

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

function AllLetters() {
  const [letters, setLetters] = useState<Array<LetterType>>([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [sortOption, setSortOption] = useState<string>("date_sent")
  

  useEffect(() => {
    setIsLoading(true);
    getAllLetters(user.username, sortOption)
      .then((res) => {
        setLetters(res.data.letters);
        setIsLoading(false);
      })
      .catch((err) => err);
  }, [user.username, sortOption]);

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.currentTarget.value)
  }

  if(isLoading){
    return(
        <LoadingBar/>
    )
  }

  return (
    <>
    <label htmlFor="sort" className="ml-5">Sort:</label>
    <select id="sort" className="p-2 m-5 border-2 rounded" onChange={handleChange} value={sortOption}>
        <option value="date_sent">date sent</option>
        <option value="sender">sender</option>
        <option value="is_opened">read</option>
      </select>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-evenly p-4">
      {letters.map((letter: LetterType) => {
          return (
              <li
              key={letter._id}
              className="border border-gray-300 rounded-lg shadow-lg flex flex-col items-center p-4 bg-white hover:shadow-xl transition-all"
              >
            <Link href={`/view-letter/${letter._id}`}>
              {letter.is_opened ? (
                  <Image
                  src={require("../../assets/opened_letter2.png")}
                  alt={`letter from ${letter.sender}`}
                  width={120}
                  height={120}
                  className="mb-4"
                  />
                ) : (
                    <Image
                    src={require("../../assets/closed_letter_sealed2.png")}
                  alt={`letter from ${letter.sender}`}
                  width={120}
                  height={120}
                  className="mb-4 mt-10"
                  />
                )}
            </Link>
            <p className="text-lg font-semibold text-gray-700 ">{`From: ${letter.sender}`}</p>
            <p className="text-sm text-gray-500">{`Date: ${letter.date_sent}`}</p>
          </li>
        );
    })}
    </ul>
    </>
  );
}

export default AllLetters;
