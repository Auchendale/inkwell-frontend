"use client";
import { UserContext } from "@/contexts/user-context";
import { useContext } from "react";

export default function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <section>
      <h1>Welcome {user.name}...</h1>
      <p>Display user info here</p>
    </section>
  );
}
