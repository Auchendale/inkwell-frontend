import Header from "../components/Header";
import UserDetails from "../components/UserDetails";
import WelcomeMsg from "../components/WelcomeMsg";

export default function UserPage() {
  return (
    <section>
      <Header />
      <WelcomeMsg />
      <UserDetails />
    </section>
  );
}
