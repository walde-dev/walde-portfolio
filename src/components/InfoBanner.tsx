import { Fade } from "react-awesome-reveal";

export default function InfoBanner() {
  return (
    <Fade big cascade triggerOnce delay={1000}>
      <div className="flex w-full max-w-[300px] md:max-w-[600px] translate-y-[70%] flex-col items-center justify-between space-y-3 space-x-2 rounded-lg border border-zinc-700 bg-gradient-to-r  from-[#242427] via-zinc-800 to-[#242427] bg-opacity-60 px-3 py-2 text-xs opacity-80 shadow-xl backdrop-blur-lg transition-all duration-150 ease-in-out hover:opacity-100 lg:max-w-[1200px] md:translate-y-[200%] md:flex-row md:space-y-0 md:space-x-7 md:px-6 md:py-3 md:text-sm">
        <span className="hidden text-zinc-500 md:inline-flex">
          availablity: july 2023 onwards
        </span>
        <span className="text-base">
          {" "}
          currently looking for 1-2 projects, ui/ux & frontend work
        </span>
        <a
          href="mailto:hello@waldemar.dev"
          className="gradient text-sm md:text-base bg-clip-text text-transparent transition-all duration-150 ease-in-out hover:font-semibold hover:underline"
        >
          send me an email →
        </a>
      </div>
    </Fade>
  );
}
