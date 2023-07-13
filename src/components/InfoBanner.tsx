import { Fade } from "react-awesome-reveal";

export default function InfoBanner() {
  return (
    <Fade big cascade triggerOnce delay={1000}>
      <div className="flex w-full max-w-[300px] translate-y-[70%] flex-col items-center justify-between space-y-3 space-x-2 rounded-lg border border-zinc-700 bg-opacity-60 bg-gradient-to-r  from-zinc-200 via-zinc-300 to-zinc-200 px-3 py-2 text-xs dark:opacity-80 shadow-xl backdrop-blur-lg transition-all duration-150 ease-in-out hover:opacity-100 dark:from-[#242427] dark:via-zinc-800 dark:to-[#242427] md:max-w-[600px] md:translate-y-[200%] md:flex-row md:space-y-0 md:space-x-7 md:px-6 md:py-3 md:text-sm lg:max-w-[1200px]">
        <span className="hidden text-zinc-600 dark:text-zinc-500 md:inline-flex">
          availablity: july 2023 onwards
        </span>
        <span className="text-base">
          {" "}
          currently looking for 1-2 projects, ui/ux & frontend work
        </span>
        <a
          href="mailto:hello@waldemar.dev"
          className="gradient bg-clip-text text-sm font-semibold text-transparent transition-all duration-150 ease-in-out hover:font-bold hover:underline md:text-base"
        >
          send me an email →
        </a>
      </div>
    </Fade>
  );
}
