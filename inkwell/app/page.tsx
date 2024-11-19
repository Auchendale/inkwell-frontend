import Link from "next/link";

export default function Home() {
  return (
    <header >
      <h1 className="text-center text-9xl ">InkWell</h1>
      <Link href="/log-in" className="border">Log in</Link>
    </header>
  );
}
