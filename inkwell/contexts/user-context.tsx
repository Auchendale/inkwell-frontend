"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

export type User = {
  username: string;
  email: string;
  img: string | undefined;
  friends: string[];
  location: { country: string; lat: number; long: number };
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  user: {
    username: "",
    email: "",
    img: undefined,
    friends: [],
    location: { country: "", lat: 0, long: 0 },
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
    username: "",
    email: "",
    img: undefined,
    friends: [],
    location: { country: "", lat: 0, long: 0 },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
