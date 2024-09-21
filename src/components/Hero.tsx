import RandomPuzzleIcons from "@/components/PuzzleBox";
import StartQuizDialog from "./StartQuizDialog";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center flex-1 gap-8 md:gap-4">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-wrap max-w-[800px]">
          Test Your Knowledge with Real-Time Quizzes
        </h3>
        <p className="text-lg md:text-xl text-wrap max-w-[600px]">
          QuizApp is the ultimate platform for engaging, real-time quizzes.
          Challenge your friends, compete on the leaderboard, and get instant
          feedback on your answers.
        </p>
        <div className="flex justify-center md:justify-start">
          <StartQuizDialog />
        </div>
      </div>
      <div className="w-full md:w-auto">
        <RandomPuzzleIcons />
      </div>
    </div>
  );
};

export default HeroSection;
