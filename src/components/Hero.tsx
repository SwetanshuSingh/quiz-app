import RandomPuzzleIcons from "@/components/PuzzleBox";
import StartQuizDialog from "./StartQuizDialog";

const HeroSection = () => {
  return (
    <div className="flex justify-around items-center flex-1">
      <div className="flex flex-col gap-4">
        <h3 className="text-6xl font-bold tracking-tight text-wrap max-w-[800px]">
          Test Your Knowledge with Real-Time Quizzes
        </h3>
        <p className="text-xl text-wrap max-w-[600px]">
          QuizApp is the ultimate platform for engaging, real-time quizzes.
          Challenge your friends, compete on the leaderboard, and get instant
          feedback on your answers.
        </p>
        <StartQuizDialog />
      </div>
      <RandomPuzzleIcons />
    </div>
  );
};

export default HeroSection;
