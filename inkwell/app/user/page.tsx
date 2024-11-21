import Header from "../components/Header";
import Nav from "../components/Nav";
import UserDetails from "../components/UserDetails";
import WelcomeMsg from "../components/WelcomeMsg";

export default function UserPage() {
  return (
    <section>
      <Nav />
      <Header />
      <UserDetails />
    </section>
  );
}
