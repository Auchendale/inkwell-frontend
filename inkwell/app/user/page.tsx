import DarkLogo from "../components/DarkLogo";
import Nav from "../components/Nav";
import Pigeonholes from "../components/Pigeonholes";
import UserBtns from "../components/UserBtns";
import WelcomeMsg from "../components/WelcomeMsg";

export default function UserPage() {
  return (
    <section>
      <Nav />
      <DarkLogo />
      <WelcomeMsg />
      <UserBtns />
      <Pigeonholes />
    </section>
  );
}
