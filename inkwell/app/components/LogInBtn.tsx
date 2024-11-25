import Link from "next/link";

const LogInBtn = () => {
  return (
    <Link href="/log-in">
      <button className="btn">Log in</button>
    </Link>
  );
};

export default LogInBtn;
