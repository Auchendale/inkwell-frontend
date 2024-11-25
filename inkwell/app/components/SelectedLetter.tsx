import axios from "axios";
import { FC, useEffect, useState } from "react";

interface props {
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

const SelectedLetter: FC<props> = ({ id }) => {
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
      .get(`https://inkwell-backend-kvij.onrender.com/api/letters/${id}`)
      .then((res) => {
        console.log(res.data.letter);
        setLetter(res.data.letter);
      });
  }, [letter]);
  return (
    <div>
      <img src={letter.content.letter} alt={`letter from ${letter.sender}`} />
    </div>
  );
};

export default SelectedLetter;
