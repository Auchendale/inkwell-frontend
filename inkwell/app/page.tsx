import LogInBtn from "./components/LogInBtn";
import HomeBackground from "./components/HomeBackground";
import LightLogo from "./components/LightLogo";

export default function Home() {
  return (
    <>
      <section className="flex flex-col min-h-screen justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <LightLogo />
        <LogInBtn />
      </section>
      <HomeBackground />
    </>
  );
}
