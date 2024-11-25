import Link from "next/link";

const LogInBtn = () => {
  return (
    <Link className="p-20" href="/log-in">
      <button className="btn">Log in</button>
    </Link>
  );
};

export default LogInBtn;
