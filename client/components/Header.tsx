"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white text-gray-900 shadow-sm mb-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl sm:text-2xl  gradient-text">
          Gamehok Tournament
        </Link>

        <nav className="flex space-x-6">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
