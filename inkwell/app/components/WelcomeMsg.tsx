"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts/user-context";

const WelcomeMsg = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="text-center my-5">
      <h1>Welcome {user.username}...</h1>
    </section>
  );
};

export default WelcomeMsg;
