"use client";

import { Puzzle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const MobileMenu = () => (
    <div className="fixed inset-0 bg-[#0F0F10] z-50 flex flex-col items-center justify-center">
      <X
        className="absolute top-5 right-5 w-6 h-6 cursor-pointer"
        onClick={toggleMenu}
      />
      <div className="flex flex-col items-center gap-8 text-2xl">
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Explore
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Leaderboard
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Testimonials
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Contact
        </p>
      </div>
    </div>
  );

  return (
    <nav className="w-full flex pt-5 justify-between items-center">
      <Puzzle className="w-6 h-6" />
      <div className="md:hidden">
        <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="hidden md:flex items-center gap-8 text-lg">
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Explore
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Leaderboard
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Testimonials
        </p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Contact
        </p>
      </div>
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
