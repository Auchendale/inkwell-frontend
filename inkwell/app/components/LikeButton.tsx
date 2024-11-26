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
    <div>
      <p>{currentLikes}</p>
      <button onClick={handleLike} className="btn">
        {isClicked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default LikeButton;
