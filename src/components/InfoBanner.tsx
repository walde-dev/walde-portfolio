import { Fade } from "react-awesome-reveal";

export default function InfoBanner() {
  return (
    <Fade
      big
      cascade
      triggerOnce
      delay={1000}
      className="flex w-full max-w-5xl justify-center xl:justify-start items-center"
    >
      <div className="mb-4 flex w-full max-w-[300px] translate-y-[70%] flex-col items-center space-x-2 space-y-3 rounded-lg border border-zinc-700 bg-opacity-60 bg-gradient-to-r from-zinc-200 via-zinc-300  to-zinc-200 px-3 py-2 text-sm shadow-xl backdrop-blur-lg transition-all duration-150 ease-in-out hover:opacity-100 dark:from-[#242427] dark:via-zinc-800 dark:to-[#242427] dark:opacity-80 sm:mb-0 sm:px-3 md:max-w-[600px] md:translate-y-[200%] md:flex-row md:justify-start md:space-x-3 md:space-y-0 md:px-6 md:py-3 lg:max-w-fit">
        <span className="text-center md:text-left text-lg">
          {" "}
          🚀 currently looking for 1-2 extra projects, ui/ux & frontend work
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
