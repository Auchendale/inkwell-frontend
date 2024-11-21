import { FC, useContext } from "react";
import { UserContext } from "@/contexts/user-context";
import Link from "next/link";

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
  const { user, setUser } = useContext(UserContext);

  return (
    <div
      className="m-5 bg-gray-800 shadow-2xl rounded-xl flex place-content-center p-2"
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
      <Link href="/user">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={singleUser.user_icon_url}
          alt="user icon"
        />
      </Link>
      <p>{singleUser.username}</p>
    </div>
  );
};

export default UserBox;
