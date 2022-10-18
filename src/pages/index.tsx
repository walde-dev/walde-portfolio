import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import FancyTitle from "../components/FancyTitle";
import TextContainer from "../components/TextContainer";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col pb-[1000px]">
      <div className="flex h-full flex-col justify-between md:h-screen ">
        <div className="relative mt-12 w-full text-left md:mt-40">
          <BackgroundGlow className="gradient -right-24 top-24 h-[500px] w-[500px] rounded-full animation-delay-2000" />
          <BackgroundGlow className="gradient right-24 top-0 h-[550px] w-[550px] rounded-full " />
          <BackgroundGlow className="gradient right-0 -top-24 h-[450px] w-[450px] rounded-full animation-delay-4000" />
          <span className="flex-nowrap text-xl font-extralight">
            Hi, my name is
          </span>
          <div className="">
            <h1 className="gradient bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              Waldemar Panin<span className="text-gray-300">.</span>
            </h1>
            <h2 className="pb-6 text-5xl font-bold md:text-6xl">
              I build things for the{" "}
              <span className="gradient bg-clip-text text-transparent">
                web
              </span>
              <span className="text-gray-300">.</span>
            </h2>
          </div>
          <p className="mt-2 text-xl font-light md:w-3/5">
            I&apos;m a software engineer based in Munich, Germany. I specialize
            in building (and occasionally designing) exceptional websites,
            applications, and everything in between. <br /> <br />
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
                Get in touch
              </a>
            </button>
          </div>
        </div>
        {/** animated scroll indicator */}
        <a href="#aboutme" className="">
          <div className=" group mt-12 flex flex-col items-center justify-center gap-4 md:mt-0 md:mb-24">
            <span className="font-light uppercase tracking-widest">Scroll</span>
            <div className="mx-auto h-[48px] border-l border-violet-500 transition-all duration-300 ease-in-out group-hover:h-[128px]" />
          </div>
        </a>
      </div>
      <div className="mt-[128px] flex flex-col gap-48">
        <AboutMe />
        <Skillset />
      </div>
    </div>
  );
};

export default Home;

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col justify-center md:scroll-m-20"
    >
      <BackgroundGlow className="gradient -bottom-12 -left-12 h-[300px] w-[300px] rounded-full " />
      <div className="relative rounded-xl px-12 pb-12 pt-6">
        <div className="absolute right-20 -top-6">
          <div className="gradient absolute -inset-0.5 rounded-full opacity-20 blur-3xl" />
          <div className="gradient absolute inset-6 rounded-full opacity-20 blur-3xl" />
          <div className="absolute inset-x-6 h-full w-full rounded-full border-2 border-violet-500/20 " />
          <Image
            src="/images/walde_portrait.jpeg"
            alt="Waldemar Panin"
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
        <div className="flex flex-row items-center md:w-3/4">
          <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
            About me
          </span>
          <hr className="ml-12 w-4/5 border-2 border-violet-500/20" />
        </div>
        <div className="mt-8 flex flex-col gap-4 text-left text-lg font-light md:w-1/2">
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
        </div>
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
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-violet-500/10">
          <Image
            src={`/images/icons/${icon}.svg`}
            alt={name}
            width={40}
            height={40}
          />
        </div>
        <span className="text-lg font-light">{name}</span>
      </div>
    );
  }

  return (
    <div
      id="skills"
      className="relative flex flex-col items-end justify-center md:scroll-m-20"
    >
      <div className="flex flex-row items-center md:w-3/4">
        <hr className="mr-12 w-4/5 border-violet-500/30" />
        <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
          What I work with
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-24">
        <div className="mt-12 grid w-full grid-cols-3 flex-row items-center justify-evenly gap-8">
          <FancyTitle>Design</FancyTitle>
          <FancyTitle>Frontend</FancyTitle>
          <FancyTitle>Backend</FancyTitle>
        </div>
        <TextContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextContainer>
      </div>
    </div>
  );
}

function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div
      className={`absolute animate-wiggle opacity-20 blur-3xl ${className}`}
    />
  );
}
