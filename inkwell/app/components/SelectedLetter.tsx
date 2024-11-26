import axios from "axios";
import { FC, useEffect, useState } from "react";
import "../../assets/css/selected-letter.css"; // Import the new CSS file

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
      });
  }, [letter, id]);

  return (
    <div className="letter-container">
      <img
        className="letter-image"
        src={letter.content.letter}
        alt={`letter from ${letter.sender}`}
      />
    </div>
  );
};

export default SelectedLetter;
