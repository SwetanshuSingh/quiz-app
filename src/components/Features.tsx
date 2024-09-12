import Expandable from "./Carousel";

const FeaturesSection = () => {
  return (
    <section className="bg-[#3D3D43] flex flex-col justify-center items-center py-16 md:py-32 px-4 md:px-8 lg:gap-20">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <p className="text-lg">Key Features</p>
        <h3 className="text-3xl md:text-5xl tracking-tighter font-bold">
          Elevate Your Trivia Experience
        </h3>
        <h5 className="max-w-[900px] text-lg md:text-xl">
          QuizApp offers a range of features to make your trivia sessions more
          engaging and competitive than ever before.
        </h5>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 md:mt-0">
        <div className="flex flex-col gap-5">
          <div className="max-w-[600px] space-y-1">
            <h6 className="text-xl md:text-2xl font-semibold">Live Leaderboards</h6>
            <p className="text-base md:text-lg">
              Track your progress and see how you stack up against your friends
              in real-time.
            </p>
          </div>

          <div className="max-w-[600px] space-y-1">
            <h6 className="text-xl md:text-2xl font-semibold">Instant Feedback</h6>
            <p className="text-base md:text-lg">
              Get immediate feedback on your answers, so you can learn and
              improve.
            </p>
          </div>

          <div className="max-w-[600px] space-y-1">
            <h6 className="text-xl md:text-2xl font-semibold">Challenge Friends</h6>
            <p className="text-base md:text-lg">
              Invite your friends to join your quiz sessions and compete for the
              top spot.
            </p>
          </div>
        </div>
        <Expandable />
      </div>
    </section>
  );
};

export default FeaturesSection;
