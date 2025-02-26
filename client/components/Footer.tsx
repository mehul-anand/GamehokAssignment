import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">GameHok Tournament</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
