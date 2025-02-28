import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-md  gradient-text">Gamehok Tournament</p>
        <div className="flex gap-4">
          <p className="text-md">Made by Mehul Anand</p>
          <a href="https://mehul.xyz/" target="_blank" rel="noopener noreferrer">portfolio</a>
          {/* <a href="https://github.com/mehul-anand/GamehokAssignment" target="_blank" rel="noopener noreferrer">Repo</a> */}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/create" className="hover:underline">
            Create
          </Link>
          <Link href="/" className="hover:underline">
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
