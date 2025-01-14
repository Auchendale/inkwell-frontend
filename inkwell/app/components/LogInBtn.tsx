import Link from "next/link";

const LogInBtn = () => {
  return (
    <Link className="button" href="/log-in">
      <button className="btn border-white">Log in</button>
    </Link>
  );
};

export default LogInBtn;
