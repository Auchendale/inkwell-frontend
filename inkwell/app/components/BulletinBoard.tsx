"use client";
import axios from "axios";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Image from "next/image";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

type PostType = {
  _id: string;
  user: string;
  post: string;
  likes: number;
  date: string;
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
      <div className="flex justify-center m-20 p-20">
        <Image
          src={require("../../assets/cartoon_bulletin_board.png")}
          width={500}
          height={300} // Add height for better control
          alt="Bulletin board"
          className="scale-150"
        />
      </div>
      <ul>
        {posts.map((post: PostType) => {
          return (
            <li key={post._id} className="p-10 m-5 border">
              <p> by {post.user} </p>
              <p> {post.date} </p>
              <p>{post.post}</p>
              <LikeButton post={post} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BulletinBoard;
