import BulletinBoard from "../components/BulletinBoard";
import DarkLogo from "../components/DarkLogo";
import Nav from "../components/Nav";
import UserNav from "../components/UserNav";
import WelcomeMsg from "../components/WelcomeMsg";

export default function BulletinPage() {
  return (
    <div>
      <Nav />
      <DarkLogo />
      <UserNav />
      <WelcomeMsg />
      <BulletinBoard />
    </div>
  );
}
