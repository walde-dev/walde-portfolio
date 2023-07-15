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
        className={`flex w-full justify-center rounded-b-lg transition-all duration-300 ease-in-out md:px-32 ${
          animateHeader
            ? "dark:bg-[#2a2f6b]/0 py-2 sm:py-4 text-base"
            : "dark:bg-[#2a2f6b]/5 py-3 sm:py-5 sm:text-lg"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between sm:justify-center md:max-w-5xl md:justify-between">
          <h1 className="text-lg">
            <Link href="/">
              <a className="underline-gradient gradient cursor-pointer px-3 py-1">
                waldemar.dev
              </a>
            </Link>
          </h1>
          <div className="flex flex-row items-center gap-2 sm:gap-6 font-light dark:text-zinc-200 text-zinc-800">
            <a
              href="#work"
              className="underline-gradient-only underline-gradient hover:dark:text-white hover:text-black"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="underline-gradient-only underline-gradient hover:dark:text-white hover:text-black"
            >
              Contact
            </a>
            <ThemeButton shrink={animateHeader}/>
          </div>
        </div>
      </Fade>
    </header>
  );
}
