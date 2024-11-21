"use client";
import BulletinBoard from "../components/BulletinBoard";
// import { UserContext } from "@/contexts/user-context";
import Header from "../components/Header";
import Nav from "../components/Nav";
import UserNav from "../components/UserNav";
import WelcomeMsg from "../components/WelcomeMsg";
// import { useContext } from "react";

export default function BulletinPage() {
  // const { user } = useContext(UserContext);
  return (
    <div>
      <Nav />
      <Header />
      <UserNav />
      <WelcomeMsg />
      <BulletinBoard />
    </div>
  );
}
