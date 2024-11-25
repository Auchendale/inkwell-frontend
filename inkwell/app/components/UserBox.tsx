import { FC, useContext } from "react";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";
import Image from "next/image";
import {flagGetter} from "../../utils/utils.ts"

type UserType = {
  username: string;
  email: string;
  user_icon_url: string | undefined;
  friends: string[];
  location: { country: string; lat: number; long: number };
};

interface UserProps {
  singleUser: UserType;
}

const UserBox: FC<UserProps> = ({ singleUser }) => {
  const { setUser } = useContext(UserContext);
  const countryCode = flagGetter(singleUser.location.country)

  return (
    <Link href="/bulletin-page">
      <div
        className="m-3 dark:bg-gray-800 shadow-2xl rounded-xl flex p-2 flex-col items-center"
        onClick={() => {
          setUser({
            username: singleUser.username,
            email: singleUser.email,
            img: singleUser.user_icon_url,
            friends: singleUser.friends,
            location: {
              country: singleUser.location.country,
              lat: singleUser.location.lat,
              long: singleUser.location.long,
            },
          });
        }}
      >
        {singleUser.user_icon_url ? (
          <img
            className="h-20 w-20 rounded-xl object-cover"
            src={singleUser.user_icon_url}
            alt="user icon"
          />
        ) : (
          <Image
            className="h-20 w-20 rounded-xl object-cover"
            src={require("../../assets/user_placeholder.png")}
            alt="default user icon"
          />
        )}
        <img src={`https://flagsapi.com/${countryCode}/shiny/64.png`}/>
        <p className="p-2">{singleUser.username}</p>
      </div>
    </Link>
  );
};

export default UserBox;
