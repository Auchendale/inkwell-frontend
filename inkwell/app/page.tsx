import Link from "next/link";

export default function Home() {
  return (
    <header className="text-center">
      <h1 className=" text-9xl m-4">InkWell</h1>
      <button className="border rounded-full p-7 my-10 hover:bg-green-600
      hover:text-white transition
      duration-300 ease-in">
        <Link href="/log-in" >Log in</Link>
      </button>
    </header>
  );
}
