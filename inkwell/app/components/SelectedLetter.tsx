import axios from "axios";
import { FC, useEffect, useState } from "react";
import "../../assets/css/selected-letter.css"; // Import the new CSS file
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import { deleteLetterById, getLetter, markLetterRead } from "@/utils/api-requests";
import LoadingBar from "./LoadingBar";
const { formatDate, formatTime } = require("../../utils/utils");

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

  const deleteLetter = () => {
    setIsLoading(true);
    deleteLetterById(id).then(() => {
      setIsLoading(false);
      router.push("/user")
    })

    
  };

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <>
      <Nav />
      <div className="letter-container flex flex-col">
        <section className="bg-white bg-opacity-80 p-3 m-3 rounded">
          <h1>
            <strong>Letter Details:</strong>
          </h1>
          <p>
            From: <strong>{letter.sender}</strong>
          </p>
          <p>
            Sent:{" "}
            {`${formatDate(letter.date_sent)} ${formatTime(letter.date_sent)}`}
          </p>
          <p>
            <strong>{isOpened ? "Previously read" : "Unread"}</strong>
          </p>
          <p></p>
        </section>
        <img
          className="letter-image"
          src={letter.content.letter}
          alt={`letter from ${letter.sender}`}
        />
        <div className="p-1 m-1">
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
            onClick={deleteLetter}
          >
            Delete Letter
          </button>
          <button
            className="btn m-3 border-white"
            onClick={() => {
              router.push("/user");
              
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedLetter;
