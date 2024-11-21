"use client";
import { UserContext } from "../../contexts/user-context";
import { useContext, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import UserLister from "../components/UserLister";
const usersData = require("../../data/users-data");

export default function LogIn() {
  const [users, setUsers] = useState(usersData);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Nav />
      <Header />
      <UserLister />
    </>
  );
}
