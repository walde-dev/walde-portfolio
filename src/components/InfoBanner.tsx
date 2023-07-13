export default function InfoBanner() {
  return (
    <div className="flex w-full max-w-[1200px] translate-y-[150%] flex-row items-center justify-between space-x-7 rounded-lg border border-zinc-700 bg-zinc-800 bg-opacity-60 px-6 py-3 text-sm shadow-xl backdrop-blur-lg">
      <span className=" text-zinc-500">availablity: july 2023 onwards</span>
      <span className="text-base">
        {" "}
        currently looking for 1-2 projects, ui/ux & frontend work
      </span>
      <a
        href="mailto:hello@waldemar.dev"
        className="gradient hover:font-semibold hover:underline bg-clip-text text-transparent transition-all duration-150 ease-in-out"
      >
        send me an email →
      </a>
    </div>
  );
}
