"use client";
import Image from "next/image";
const darkLogo = require("../../assets/inkwell-logo-black.png");

const DarkLogo = () => {
  return (
    <header className="m-auto sm:p-8 max-w-xl flex justify-center rounded-xl">
      <Image src={darkLogo} alt="Hand-drawn InkWell dark logo" width={500} />
    </header>
  );
};

export default DarkLogo;
