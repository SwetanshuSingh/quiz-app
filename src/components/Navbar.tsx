import { Puzzle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex pt-5 justify-between items-center">
      <Puzzle className="w-6 h-6" />
      <div className="flex justify-center items-center gap-8 text-lg">
        <p className="cursor-pointer hover:underline hover:underline-offset-4">
          Explore
        </p>
        <p>Leaderboard</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
