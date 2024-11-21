import Link from "next/link";

const LogInBtn = () => {
  return (
    <button className="border rounded-full p-7 my-10 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
      <Link href="/log-in">Log in</Link>
    </button>
  );
};

export default LogInBtn;
