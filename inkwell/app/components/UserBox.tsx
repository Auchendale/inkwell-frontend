import { FC, useContext } from "react";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";
import Image from "next/image";
const { flagGetter } = require("../../utils/utils.ts");

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
  const countryCode = flagGetter(singleUser.location.country);

  return (
    <Link href="/bulletin-page">
      <div
        className="m-3 bg-white shadow-lg rounded-xl flex flex-col items-center p-4 hover:shadow-2xl transition-all cursor-pointer"
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
            className="h-24 w-24 rounded-xl object-cover mb-2"
            src={singleUser.user_icon_url}
            alt="user icon"
          />
        ) : (
          <Image
            className="h-24 w-24 rounded-full object-cover mb-2"
            src={require("../../assets/user_placeholder.png")}
            alt="default user icon"
          />
        )}
        <img
          className="mb-2"
          src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
        />
        <p className="text-lg font-semibold text-gray-900">
          {singleUser.username}
        </p>
      </div>
    </Link>
  );
};

export default UserBox;
