import Link from "next/link";

const LogInBtn = () => {
  return (
    <button className="btn">
      <Link href="/log-in">Log in</Link>
    </button>
  );
};

export default LogInBtn;
