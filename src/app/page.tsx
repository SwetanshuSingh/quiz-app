import Navbar from "@/components/Navbar";
import RandomPuzzleIcons from "@/components/PuzzleBox";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full px-5 bg-[#0F0F10] text-[#E7E7E4]">
      <section className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className="flex justify-around items-center flex-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl font-bold tracking-tight text-wrap max-w-[800px]">
              Test Your Knowledge with Real-Time Quizzes
            </h3>
            <p className="text-xl text-wrap max-w-[600px]">
              QuizApp is the ultimate platform for engaging, real-time quizzes.
              Challenge your friends, compete on the leaderboard, and get
              instant feedback on your answers.
            </p>
            <Link
              href="#"
              className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-12 items-center justify-center rounded-md px-8 font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Start a Quiz
            </Link>
          </div>
          <RandomPuzzleIcons />
        </div>
      </section>
    </main>
  );
}
