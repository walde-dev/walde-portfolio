import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

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
    <header className="glass-bg fixed top-0 z-10 flex w-full  px-2 md:px-20">
      <Fade
        big
        cascade
        triggerOnce
        delay={1000}
        className={`flex w-full rounded-b-lg transition-all duration-300 ease-in-out md:px-32 ${
          animateHeader
            ? "bg-[#2a2f6b]/0 py-4 text-base"
            : "bg-[#2a2f6b]/5 py-5 text-lg"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-center md:max-w-5xl md:justify-between">
          <h1 className="text-lg">
            <Link href="/">
              <a className="underline-gradient gradient cursor-pointer px-3 py-1">
                waldemar.dev
              </a>
            </Link>
          </h1>
          <div className="flex flex-row gap-6 font-light">
            <Link href="work">
              <a className="underline-gradient-only underline-gradient hover:text-white">
                My Work
              </a>
            </Link>
            <Link href="contact">
              <a className="underline-gradient-only underline-gradient hover:text-white">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </Fade>
    </header>
  );
}
