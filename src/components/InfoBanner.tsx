import { Fade } from "react-awesome-reveal";

export default function InfoBanner() {
  return (
    <Fade
      big
      cascade
      triggerOnce
      delay={100}
      className="-mt-2 flex max-w-[450px] items-center justify-center md:justify-start"
    >
      <div className="mb-4 flex flex-col items-center space-y-4 rounded-[32px] border border-zinc-700 bg-opacity-60 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 px-8 py-2 text-center  text-lg shadow-xl transition-all duration-150 ease-in-out dark:from-[#242427] dark:via-zinc-800 dark:to-[#242427]  sm:mb-0">
        <span className="flex flex-row items-center space-x-3 whitespace-nowrap text-lg font-semibold">
          <svg height="15" width="15">
            <circle
              cx="7"
              cy="7"
              r="6"
              className="animate-pulse"
              fill="green"
            />
          </svg>{" "}
          <span>Available for new projects</span>
        </span>
        <div className="flex flex-col text-left font-medium">
          <Service title="full-stack development" />
          <Service title="ui/ux design" />
          <Service title="web design" />
          <Service title="app design" />
        </div>

        {/* <a
          href="#contact"
          className="peer w-full rounded-xl bg-violet-600 py-2 font-medium text-white transition-all duration-150 ease-in-out hover:bg-violet-500"
        >
          Contact Me
        </a> */}
      </div>
    </Fade>
  );
}

function Service({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center space-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>{" "}
      <span>{title}</span>
    </div>
  );
}
