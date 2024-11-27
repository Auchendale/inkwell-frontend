"use client";
import axios from "axios";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Image from "next/image";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
const parchmentBackground = require("../../assets/parchment3.png");


type PostType = {
  _id: string;
  user: string;
  post: string;
  likes: number;
  date: string;
};

const formatDate = (dateTime: string) => {
  const splitDateTime = dateTime.split('T');
  const splitDate = splitDateTime[0].split('-');
  const formattedDate = splitDate.reverse().join('-');
  return formattedDate;
};

const formatTime = (dateTime: string) => {
  const splitDateTime = dateTime.split('T');
  const time = splitDateTime[1].slice(0, 5);
  if(Number(time.substring(0,2))<12){
    return time + " am"
  }
  else 
  return time + " pm";
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
      <ul className="flex flex-wrap gap-5 justify-center bg-[#523627]">
        {posts.map((post: PostType) => {
          return (
            <li key={post._id} className="relative font-mono">
              <Image
              src={parchmentBackground}
              alt ="Hand drawn piece of paper nailed to board"
              width = {500}
              />
              <div className="absolute inset-0 flex m-10 p-10">
                <p className="m-1">
                  {post.post}
                  <br></br>
                  by {post.user} at {formatTime(post.date)}, {formatDate(post.date)}
                  </p>
              </div>
              <div className="absolute bottom-0 right-0 m-10 p-10" >
                <LikeButton post={post} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BulletinBoard;
