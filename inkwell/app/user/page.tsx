import Header from "../components/Header";
import Nav from "../components/Nav";
import PigeonHoles from "../components/PigeonHoles";
import UserDetails from "../components/UserDetails";

export default function UserPage() {
  return (
    <section>
      <Nav />
      <Header />
      <PigeonHoles />
      <UserDetails />
    </section>
  );
}
