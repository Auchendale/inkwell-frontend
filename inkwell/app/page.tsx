"use client"
import CurrentUserContext from "@/contexts/user-context";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<string|null|Function>('Kev')
  return (
<CurrentUserContext.Provider value={{ setCurrentUser}}>
    <header className="text-center">
      <h1 className=" text-9xl m-4">InkWell</h1>
      <button className="border rounded-full p-7 my-10 hover:bg-green-600
      hover:text-white transition
      duration-300 ease-in">
        <Link href="/log-in" >Log in</Link>
      </button>
    </header>
    </CurrentUserContext.Provider>

  );
}
