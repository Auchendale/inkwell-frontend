import Header from "./components/Header";
import LogInBtn from "./components/LogInBtn";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center">
      <Header />
      <LogInBtn />
    </section>
  );
}
