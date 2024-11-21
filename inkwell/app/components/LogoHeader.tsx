import Image from "next/image";
const logo = require("../../assets/inkwell_logo1.png");

const LogoHeader = () => {
  return (
    <header className="m-auto my-10 p-10 bg-white max-w-xl flex content-evenly">
      <Image src={logo} alt="Hand-drawn InkWell logo" width={500} />
    </header>
  );
};

export default LogoHeader;
