import Image from "next/image";
const unparsedLogo = require("../../assets/inkwell_logo1.png");
const logo = JSON.parse(JSON.stringify(unparsedLogo))

const Header = () => {
  return (
    <header className="text-center m-auto my-10 max-w-xl flex content-evenly">
      <Image src={logo} alt="Hand-drawn InkWell logo" width={500} />
    </header>
  );
};

export default Header;
