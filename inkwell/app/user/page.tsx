import Header from "../components/Header";
import Nav from "../components/Nav";
import PigeonHoles from "../components/PigeonHoles";
import UserBtns from "../components/UserBtns";

export default function UserPage() {
  return (
    <section>
      <Nav />
      <Header />
      <PigeonHoles />
      <UserBtns />
    </section>
  );
}
