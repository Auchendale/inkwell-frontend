import Header from "./components/Header";
import LogInBtn from "./components/LogInBtn";
import bgImage from "../assets/bg-forest.jpeg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <section className="flex flex-col min-h-screen justify-center items-center">
        <Header />
        <LogInBtn />
      </section>
    </div>
  );
}
