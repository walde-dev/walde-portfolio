import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import InfoBanner from "./InfoBanner";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <header className="glass-bg fixed top-0 z-50 flex w-full  px-2 md:px-20">
      <Fade
        big
        cascade
        triggerOnce
        delay={1000}
        className={`flex w-full justify-center rounded-b-lg transition-all duration-300 ease-in-out lg:px-32 ${
          animateHeader
            ? "py-2 text-base dark:bg-[#2a2f6b]/0 sm:py-4"
            : "py-3 dark:bg-[#2a2f6b]/5 sm:py-5 sm:text-lg"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between md:max-w-5xl">
          <h1 className="text-sm sm:text-lg">
            <Link href="/">
              <a className="underline-gradient gradient cursor-pointer px-3 py-1">
                waldemar.dev
              </a>
            </Link>
          </h1>
          <div className="text-sm sm:text-base flex flex-row items-center gap-2 font-light text-zinc-800 dark:text-zinc-200 sm:gap-6">
            <a
              href="#work"
              className="underline-gradient-only underline-gradient hover:text-black hover:dark:text-white"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="underline-gradient-only underline-gradient hover:text-black hover:dark:text-white"
            >
              Contact
            </a>
            <ThemeButton shrink={animateHeader} />
          </div>
        </div>
      </Fade>
    </header>
  );
}
