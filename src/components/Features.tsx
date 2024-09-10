const FeaturesSection = () => {
  return (
    <section className="bg-[#3D3D43] flex flex-col justify-center items-center lg:py-32 lg:gap-20">
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-lg">Key Features</p>
        <h3 className="text-5xl tracking-tighter font-bold">
          Elevate Your Trivia Experience
        </h3>
        <h5 className="max-w-[900px] text-xl text-center">
          QuizApp offers a range of features to make your trivia sessions more
          engaging and competitive than ever before.
        </h5>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col gap-5">
          <div className="max-w-[600px] space-y-1">
            <h6 className="text-2xl font-semibold">Live Leaderboards</h6>
            <p className="text-lg">
              Track your progress and see how you stack up against your friends
              in real-time.
            </p>
          </div>

          <div className="max-w-[600px] space-y-1">
            <h6 className="text-2xl font-semibold">Instant Feedback</h6>
            <p className="text-lg">
              Get immediate feedback on your answers, so you can learn and
              improve.
            </p>
          </div>

          <div className="max-w-[600px] space-y-1">
            <h6 className="text-2xl font-semibold">Challenge Friends</h6>
            <p className="text-lg">
              Invite your friends to join your quiz sessions and compete for the
              top spot.
            </p>
          </div>
        </div>
        <div className="bg-[#2F2E30] w-[540px] h-[300px] rounded-xl"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
