"use client";
import Image from "next/image";
const lightLogo = require("../../assets/inkwell-logo-white.png");

const LightLogo = () => {
  return (
    <header className="m-auto my-10 p-5 sm:p-8 max-w-xl flex justify-center">
      <Image src={lightLogo} alt="Hand-drawn InkWell light logo" />
    </header>
  );
};

export default LightLogo;
