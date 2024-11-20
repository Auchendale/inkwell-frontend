"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

export type User = {
  name: string;
  email: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  user: {
    name: "Kev",
    email: "kev.morel.musician@hotmail.com",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

// If we don't want a default user, use partial:
// export const UserContext = createContext<Partial<UserContextInterface>>({});

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: "Kev",
    email: "kev.morel.musician@hotmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
