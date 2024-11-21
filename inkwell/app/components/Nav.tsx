import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 shadow">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/log-in" className="hover:text-blue-500">
        Change user
      </Link>
      <Link href="/bulletin-page" className="hover:text-blue-500">
        Bulletin board
      </Link>
      <Link href="/" className="hover:text-blue-500">
        Log out
      </Link>
    </nav>
  );
};

export default Nav;
