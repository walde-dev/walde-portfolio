import { Fade } from "react-awesome-reveal";

export default function InfoBanner() {
  return (
    <Fade
      big
      cascade
      triggerOnce
      delay={100}
      className="flex w-full max-w-5xl items-center justify-center md:justify-start"
    >
      <div className="mb-4 flex max-w-[300px] flex-col items-center space-x-2 space-y-3 rounded-[32px] border border-zinc-700 bg-opacity-60 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200  px-3 py-2 text-lg shadow-xl backdrop-blur-lg transition-all duration-150 ease-in-out hover:opacity-100 dark:from-[#242427] dark:via-zinc-800 dark:to-[#242427] dark:opacity-80 sm:mb-0 md:max-w-[800px] md:flex-row md:justify-start md:space-x-3 md:space-y-0 lg:max-w-fit">
        <span className="text-center md:text-left ">
          🚀 currently looking for 1-2 extra projects, ui/ux & frontend work.
        </span>
        <a
          href="#contact"
          className="gradient bg-clip-text text-transparent transition-all duration-150 ease-in-out hover:font-semibold hover:underline"
        >
          contact me →
        </a>
      </div>
    </Fade>
  );
}
