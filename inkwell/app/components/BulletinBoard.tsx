import Image from "next/image";
import React from "react";

const BulletinBoard = () => {
  return (
    <div>
      <img
        src={require("../../assets/bulletin_board1.png")}
        width={200}
        height={200}
        alt="Bulletin board"
      />
    </div>
  );
};

export default BulletinBoard;
