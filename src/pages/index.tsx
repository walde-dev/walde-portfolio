import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import FancyTitle from "../components/FancyTitle";
import TextContainer from "../components/TextContainer";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col pb-[1000px]">
      <div className="flex h-full flex-col justify-between md:h-screen ">
        <div className="relative mt-12 w-full text-left md:mt-40">
          <Fade cascade damping={0.5} triggerOnce>
            <BackgroundGlow className="gradient animation-delay-2000 -right-60 top-24 h-[500px] w-[500px] rounded-full" />
            <BackgroundGlow className="gradient -right-12 top-52 h-[400px] w-[400px] rounded-full " />
            <BackgroundGlow className="gradient animation-delay-4000 -right-28 -top-24 h-[450px] w-[450px] rounded-full" />
            <span className="flex-nowrap text-xl font-extralight uppercase tracking-wide">
              Hi, my name is{" "}
              <span className="gradient bg-clip-text font-semibold text-transparent">
                Waldemar Panin
              </span>
            </span>
            <div className="">
              <h2 className="pb-6 text-5xl font-bold md:text-6xl">
                I build things for the{" "}
                <span className="gradient bg-clip-text text-transparent">
                  web
                </span>
                <span className="text-gray-300">.</span>
              </h2>
            </div>
            <p className="mt-2 text-xl font-light md:w-3/5">
              I&apos;m a software engineer based in Munich, Germany. I
              specialize in building (and occasionally designing) exceptional
              websites, applications, and everything in between. <br /> <br />
              <span>Let&apos;s build something together. </span>
            </p>
            <div className="flex items-center justify-center md:block">
              <button className="learn-more mt-10">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="mailto:info@waldemar.dev"
                  className="button-text text-violet-400"
                >
                  View my work
                </a>
              </button>
            </div>
          </Fade>
        </div>
        {/** animated scroll indicator */}
        <a href="#aboutme" className="group">
          <Zoom
            cascade
            damping={0.3}
            delay={5000}
            triggerOnce
            className="mt-12 flex flex-col items-center justify-center gap-4 md:mt-0 md:mb-24"
          >
            <span className="font-light uppercase tracking-widest">Scroll</span>
            <div className="mx-auto h-[48px] border-l border-violet-500 transition-all duration-300 ease-in-out group-hover:h-[128px]" />
          </Zoom>
        </a>
      </div>

      <div className="mt-[128px] flex flex-col gap-4">
        <MyWork />
        <AboutMe />
        <Skillset />
      </div>
    </div>
  );
};

export default Home;

function MyWork() {
  function Project({ title, href, image }: { title: string; href: string, image?: string }) {
    return (
      <div className="rounded-xl p-8 flex flex-col justify-center">123 </div>
    );
  }

  return (
    <div
      id="aboutme"
      className="relative flex flex-col justify-center md:scroll-m-20 mb-40"
    >
      <div className="relative rounded-xl pb-12 pt-6">
        <Fade triggerOnce>
          <div className="flex flex-row items-center md:w-3/4">
            <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
              My Work
            </span>
            <hr className="ml-12 w-4/5 border-2 border-violet-500/20" />
          </div>
        </Fade>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <Project title="Personal Portfolio" href="https://waldemar.dev" />
        <Project title="Coinkit Webwallet" href="https://app.coinkit.de" />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col justify-center md:scroll-m-20"
    >
      <div className="relative rounded-xl pb-12 pt-6">
        <div className="absolute right-20 -top-6 z-10">
          <div className="relative">
            <Fade triggerOnce delay={1000}>
              <BackgroundGlow className="gradient animation-delay-2000 inset-x-44 h-[200px] w-[200px] rounded-full opacity-5" />
              <div className="absolute inset-x-6 h-full w-full rounded-full border-2 border-violet-500/20 " />
              <Image
                src="/images/walde_portrait.jpeg"
                alt="Waldemar Panin"
                width={300}
                height={300}
                className="rounded-full "
              />
            </Fade>
          </div>
        </div>
        <Fade triggerOnce>
          <div className="flex flex-row items-center md:w-3/4">
            <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
              About me
            </span>
            <hr className="ml-12 w-4/5 border-2 border-violet-500/20" />
          </div>
        </Fade>
        <Fade
          triggerOnce
          cascade
          damping={0.5}
          delay={1000}
          className="mt-8 flex flex-col gap-4 text-left text-lg font-light md:w-1/2"
        >
          <p>
            Hey! My name is{" "}
            <span className="font-normal text-white">Waldemar</span>. I&apos;m a{" "}
            <span className="gradient-bg px-1">full-stack web developer</span>{" "}
            located in Munich, Germany. I have a huge passion for creating
            intuitive and interactive{" "}
            <span className="gradient-bg whitespace-nowrap px-1">
              user experiences
            </span>
            .
          </p>
          <p>
            From solo-projects to working in a team, I have experience in all
            aspects of the development cycle. I&apos;m always looking for
            opportunities to work on{" "}
            <span className="gradient-bg px-1">meaningful projects</span> with{" "}
            <span className="gradient-bg px-1">like minded people</span>.
          </p>
          <p className="mt-4">
            When I&apos;m not coding and/or designing, you&apos;ll find me
            working on some hip-hop beats, inside the gym, or trying to rank up
            in some videogame.
          </p>
        </Fade>
      </div>
    </div>
  );
}

function Skillset() {
  const [selectedTab, setSelectedTab] = useState<
    "design" | "frontend" | "backend"
  >("design");

  function Skill({ name, icon }: { name: string; icon: string }) {
    return (
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full ">
          <div className="gradient absolute -inset-0.5 rounded-full border blur-sm" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[hsl(235,44%,5%)]">
            <Image src={icon} alt={name} width={40} height={40} />
          </div>
        </div>
        <span className="text-lg font-light uppercase tracking-widest">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div
      id="skills"
      className="relative flex flex-col items-end justify-center md:scroll-m-20"
    >
      <div className="flex w-full flex-row items-center">
        <hr className="mr-12 w-4/5 border-2 border-violet-500/30" />
        <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
          SKILLS
        </span>
      </div>
      <div className="mt-12 grid w-full grid-cols-2">
        <span className="text-lg uppercase tracking-widest ">Design</span>
        <span className="text-lg uppercase tracking-widest">Engineering</span>
      </div>
      <div className="mt-12 grid w-full grid-cols-2 gap-8">
        <p className="text-justify font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-justify  font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mt-12 grid w-full grid-cols-2 gap-8">
        <Skill icon="/logos/figma.svg" name="Figma" />
      </div>
    </div>
  );
}

export function BackgroundGlow({ className }: { className?: string }) {
  return <div className={`absolute opacity-20 blur-xl ${className}`} />;
}
