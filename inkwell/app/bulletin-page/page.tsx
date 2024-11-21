"use client";
import BulletinBoard from "../components/BulletinBoard";
// import { UserContext } from "@/contexts/user-context";
import Header from "../components/Header";
import UserNav from "../components/UserNav";
import WelcomeMsg from "../components/WelcomeMsg";
// import { useContext } from "react";

export default function BulletinPage() {
  // const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <UserNav />
      <WelcomeMsg />
      <BulletinBoard />
    </div>
  );
}
