import Image from "next/image";
import React from "react";

const BulletinBoard = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={require("../../assets/bulletin_board1.png")}
        width={500}
        alt="Bulletin board"
      />
    </div>
  );
};

export default BulletinBoard;
