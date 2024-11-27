"use client";
import { UserContext } from "@/contexts/user-context";
import { postPost } from "@/utils/api-requests";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import LoadingBar from "./LoadingBar";
import { useRouter } from "next/navigation";

export default function SubmitPost() {
  const { user } = useContext(UserContext);
  const [emptyPost, setEmptyPost] = useState(false);
  const [postText, setPostText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handlePostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmit = (event: React.MouseEvent) => {
    if (postText.length === 0) {
      setEmptyPost(true);
      return;
    }
    setEmptyPost(false);
    setIsLoading(true);
    event.preventDefault();
    postPost(user.username, postText).then((response) => {
      setIsLoading(false);
      setPostText("");
      router.push("/bulletin-page")
    });
  };

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <>
      <form className="grid">
        <label htmlFor="post" className="p-5 m-5">
          Have your say:
        </label>
        <textarea
          required={true}
          className="p-5 m-5"
          id="post"
          value={postText}
          onChange={handlePostChange}
        />

        <button type="submit" onClick={handleSubmit} className="btn m-5 w-20">
          Submit
        </button>
        <br />
        {emptyPost ? <p>Please write your post</p> : null}
      </form>
    </>
  );
}
