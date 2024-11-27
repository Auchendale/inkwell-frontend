"use client";
import { FC, useState } from "react";
import axios from "axios";

type PostType = {
  _id: string;
  user: string;
  post: string;
  likes: number;
  date: string;
};

interface PostProps {
  post: PostType;
}

const LikeButton: FC<PostProps> = ({ post }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = useState<number>(post.likes);

  const handleLike = () => {
    let likeValue = 1;
    if (isClicked) {
      likeValue = -1;
    }

    setCurrentLikes(currentLikes + likeValue);

    axios
      .patch(
        `https://inkwell-backend-j9si.onrender.com/api/posts/${post._id}`,
        { likes: likeValue }
      )
      .then((response) => {
        console.log(isClicked);
        setIsClicked(!isClicked);
      });
  };

  return (
    <div className="font-serif border border-black bg-[#F9E7C8]  shadow-2xl rounded-lg mx-4">
      <p className="text-center">{currentLikes}</p>
      <button onClick={handleLike} className="btn bg-[#F9D491] border-2 border-black">
        {isClicked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default LikeButton;
