import axios from "axios";
import { FC, useEffect, useState } from "react";
import "../../assets/css/selected-letter.css"; // Import the new CSS file
import Nav from "./Nav";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    axios
      .get(`https://inkwell-backend-j9si.onrender.com/api/letters/${id}`)
      .then((res) => {
        setLetter(res.data.letter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const router = useRouter();
  const markRead = () => {
    const body = { is_opened: true };
    axios
      .patch(
        `https://inkwell-backend-j9si.onrender.com/api/letters/${id}`,
        body
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <>
      <Nav />
      <div className="absolute border bg-white  p-3 rounded-xl top-1/4 left-1/2 transform -translate-x-1/2">
        <p>from: {letter.sender}</p>
        <p>date: {letter.date_sent}</p>
      </div>
      <div className="letter-container">
        <img
          className="letter-image"
          src={letter.content.letter}
          alt={`letter from ${letter.sender}`}
        />
      </div>
      <div className="absolute border my-40 bg-white  p-3 rounded-xl top-3/4 left-1/2 transform -translate-x-1/2">
        <button className="btn" onClick={markRead}>
          Mark Read
        </button>
        <button
          className="btn"
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
