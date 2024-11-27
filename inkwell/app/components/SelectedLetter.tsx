import axios from "axios";
import { FC, useEffect, useState } from "react";
import "../../assets/css/selected-letter.css"; // Import the new CSS file
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import { getLetter, markLetterRead } from "@/utils/api-requests";
import LoadingBar from "./LoadingBar";

interface Props {
  id: string;
}

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

const SelectedLetter: FC<Props> = ({ id }) => {
  const [letter, setLetter] = useState<LetterType>({
    _id: "",
    sender: "",
    recipient: "",
    content: {
      letter: "letter.jpg",
    },
    is_opened: false,
    is_saved: false,
    date_sent: "",
  });
  const [isOpened, setIsOpened] = useState(letter.is_opened);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    getLetter(id)
      .then((res) => {
        setLetter(res.data.letter);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const markRead = () => {
    setIsLoading(true);
    markLetterRead(id, true).then(() => {
      setIsOpened(true);
      setIsLoading(false);
    });
  };

  const markUnread = () => {
    setIsLoading(true);
    markLetterRead(id, false).then(() => {
      setIsOpened(false);
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <>
      <Nav />
      <div className="absolute border bg-white  p-3 rounded-xl top-1/4 left-1/2 transform -translate-x-1/2 text-black">
        <p>from: {letter.sender}</p>
        <p>date: {letter.date_sent}</p>
        <p>{isOpened ? "Read" : "Unread"}</p>
        <p></p>
      </div>
      <div className="letter-container">
        <img
          className="letter-image"
          src={letter.content.letter}
          alt={`letter from ${letter.sender}`}
        />
      </div>
      <div className="absolute my-40 p-3 rounded-xl top-3/4 left-1/2 transform -translate-x-1/2">
        {isOpened ? (
          <button className="btn m-3 border-white" onClick={markUnread}>
            Mark Unread
          </button>
        ) : (
          <button className="btn m-3 border-white" onClick={markRead}>
            Mark Read
          </button>
        )}

        <button
          className="btn m-3 border-white"
          onClick={() => {
            router.push("/user");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default SelectedLetter;
