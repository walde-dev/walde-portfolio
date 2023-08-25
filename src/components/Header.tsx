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
    <header className="glass-bg fixed top-0 z-50 flex w-full overflow-hidden border-b border-gray-800/40 px-2 md:px-20">
      <Fade
        big
        cascade
        triggerOnce
        delay={0}
        className={`flex w-full justify-center rounded-b-lg transition-all duration-300 ease-in-out lg:px-32 ${
          animateHeader
            ? "py-2 text-base dark:bg-[#2a2f6b]/0 sm:py-4"
            : "py-3 dark:bg-[#2a2f6b]/5 sm:py-5 sm:text-lg"
        }`}
      >
        <div className="flex w-full flex-row  items-center md:justify-between justify-around md:max-w-5xl">
          <h1 className="text-sm xs:text-lg hidden xs:block">
            <Link legacyBehavior href="/">
              <a className="underline-gradient gradient cursor-pointer px-3 py-1">
                waldemar.dev
              </a>
            </Link>
          </h1>
          <div className="space-x-6 md:space-x-8">
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
          </div>
          <div className="flex flex-row items-center gap-2 text-sm font-light text-zinc-800 dark:text-zinc-200 xs:text-base sm:gap-6">
            <ThemeButton shrink={animateHeader} />
          </div>
        </div>
      </Fade>
    </header>
  );
}
