import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center">
        <button className="border rounded-full p-7 my-10 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
          <Link href="/log-in">Log in</Link>
        </button>
      </div>
    </>
  );
}
