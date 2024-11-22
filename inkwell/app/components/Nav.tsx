import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-8 p-4 dark:bg-gray-800 shadow">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/log-in" className="hover:text-blue-500">
        Change User
      </Link>
      <Link href="/bulletin-page" className="hover:text-blue-500">
        Bulletin Board
      </Link>
      <Link href="/" className="hover:text-blue-500">
        Log Out
      </Link>
    </nav>
  );
};

export default Nav;
