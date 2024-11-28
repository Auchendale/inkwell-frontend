import DarkLogo from "../components/DarkLogo";
import LetterViewer from "../components/LetterViewer";
import Nav from "../components/Nav";
import UserBtns from "../components/UserBtns";
import WelcomeMsg from "../components/WelcomeMsg";

export default function UserPage() {
  return (
    <section>
      <Nav />
      <DarkLogo />
      <WelcomeMsg />
      <UserBtns />
      <LetterViewer />
    </section>
  );
}
