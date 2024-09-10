import { GitBranch } from "lucide-react";

const Community = () => {
  return (
    <section className="flex flex-col items-center lg:py-32 lg:gap-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-fit bg-[#3D3D43] flex justify-center items-center gap-2 rounded-xl px-3 py-1">
          <GitBranch size={18} />
          <p className="font-medium">By developers, for kids</p>
        </div>

        <h3 className="text-5xl tracking-tighter font-bold">
          Built by the community
        </h3>
      </div>

      <div className="flex justify-center items-start gap-8">
        <div className="flex flex-col items-start gap-5">
          <p className="max-w-[580px] text-lg">
            QuizApp is free, open-source, and built by developers just like you.
            These are some of the contributors who made this possible so far.
          </p>
          <span className="flex justify-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href=""
              className="w-fit group bg-gray-800 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold duration-300 hover:bg-[#5865F2] hover:text-white dark:bg-neutral-800 dark:hover:bg-[#5865F2]"
            >
              <svg
                className="h-4 w-4 fill-current group-hover:rotate-[360deg]"
                role="img"
                style={{ transition: "color 0s, transform 0.3s" }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discord</title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join the Discord
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href=""
              className="group bg-gray-800 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold duration-300 hover:bg-black hover:text-white dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-black"
            >
              <svg
                className="h-4 w-4 fill-current group-hover:-rotate-[360deg]"
                role="img"
                style={{ transition: "color 0s, transform 0.3s" }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Contribute on GitHub
            </a>
          </span>
        </div>
        <div className="w-[540px] h-[300px] flex justify-center items-center bg-[#2F2E30] rounded-xl">
          <p className="text-xl">{"looking for contributors :)"}</p>
        </div>
      </div>
    </section>
  );
};

export default Community;
