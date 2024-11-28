"use client";
import axios from "axios";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Image from "next/image";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
const parchmentBackground1 = require("../../assets/parchment4.png");
const parchmentBackground2 = require("../../assets/parchment2.png");
const parchmentBackground3 = require("../../assets/parchment3.png");
const bulletinRoof = require("../../assets/bulletin roof.png");
const { formatDate, formatTime } = require("../../utils/utils");

type PostType = {
  _id: string;
  user: string;
  post: string;
  likes: number;
  date: string;
};

const randomPaper = () => {
  const arr = [
    parchmentBackground1,
    parchmentBackground2,
    parchmentBackground3,
  ];
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};

const BulletinBoard = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);

  useEffect(() => {
    axios
      .get("https://inkwell-backend-j9si.onrender.com/api/posts")
      .then((response) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <>
      <div>
        <Image
          src={bulletinRoof}
          alt="Hand drawn blue roof of bulletin board"
          width={10000}
        />
      </div>
      <div className="mx-36">
        <ul className="flex flex-wrap gap-5 justify-center bg-[#523627]">
          {posts.map((post: PostType) => {
            return (
              <li key={post._id} className="relative font-mono">
                <Image
                  src={randomPaper()}
                  alt="Hand drawn piece of paper nailed to board"
                  width={500}
                />
                <div className="absolute inset-0 flex m-10 p-10">
                  <p className="m-1">
                    {post.post}
                    <br></br>
                    by {post.user} at {formatTime(post.date)},{" "}
                    {formatDate(post.date)}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 m-10 p-10">
                  <LikeButton post={post} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BulletinBoard;
