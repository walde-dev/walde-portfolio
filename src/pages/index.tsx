import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import classNames from "classnames";
import Link from "next/link";
import ThemeButton from "../components/ThemeButton";
import FrontendIcon from "../components/icons/FrontendIcon";
import BackendIcon from "../components/icons/BackendIcon";
import DesignIcon from "../components/icons/DesignIcon";
import BlockchainIcon from "../components/icons/BlockchainIcon";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col">
      <div className="flex h-full flex-col justify-between md:h-screen">
        <div className="relative mt-12 w-full text-left md:mt-56">
          <Fade cascade damping={0.5} triggerOnce>
            <BackgroundGlow className="gradient animation-delay-2000 -right-60 top-24 h-[500px] w-[500px] rounded-full" />
            <BackgroundGlow className="gradient -right-12 top-52 h-[400px] w-[400px] rounded-full " />
            <BackgroundGlow className="gradient animation-delay-4000 -right-28 -top-24 h-[450px] w-[450px] rounded-full" />
            <span className="flex-nowrap text-lg font-extralight uppercase tracking-wide md:text-xl">
              Hi, my name is{" "}
              <span className="gradient whitespace-nowrap bg-clip-text font-semibold text-transparent">
                Waldemar Panin
              </span>
            </span>
            <div className="">
              <h2 className="pb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                I build things for the{" "}
                <span className="gradient bg-clip-text text-transparent">
                  web
                </span>
                <span className="text-gray-300">.</span>
              </h2>
            </div>
            <p className="mt-2 text-xl dark:font-light font-normal md:w-3/5">
              I&apos;m a software engineer based in Munich, Germany. I
              specialize in building & designing exceptional websites,
              applications, and everything in between. <br /> <br />
              <span>Let&apos;s build something together. </span>
            </p>
            <div className="flex items-center justify-center md:block">
              <button className="learn-more mt-10">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <a href="#work" className="button-text text-violet-400">
                  View my work
                </a>
              </button>
            </div>
          </Fade>
        </div>
        {/** animated scroll indicator */}
        <a href="#work" className="group">
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
        <Fade cascade damping={0.5} triggerOnce>
          <MyWork />
          <AboutMe />
          <Contact />
        </Fade>
        {/* <Skillset /> */}
      </div>
    </div>
  );
};

export default Home;

type Tag = "Frontend" | "Backend" | "Design" | "Blockchain";

//icon for each tag
const tagIcons = {
  Frontend: <FrontendIcon className="text-zinc-800 dark:text-zinc-300" />,
  Backend: <BackendIcon className="text-zinc-800 dark:text-zinc-300" />,
  Design: <DesignIcon className="text-zinc-800 dark:text-zinc-300" />,
  Blockchain: <BlockchainIcon className="text-zinc-800 dark:text-zinc-300" />,
};

function MyWork() {
  function Project({
    title,
    href,
    image,
    imageClassName,
    projectTitle,
    description,
    techStack,
    counter,
    year,
    pinned = false,
    tags,
  }: {
    title: string;
    href: string;
    image?: string;
    imageClassName?: string;
    projectTitle?: string;
    description?: string;
    techStack?: string[];
    counter: number;
    year: string;
    pinned?: boolean;
    tags?: Tag[];
  }) {
    return (
      <Fade cascade damping={0.5} delay={250 * counter} triggerOnce>
        <div className="project-card  group relative flex w-full flex-col-reverse justify-between space-x-0 rounded-xl py-8  lg:flex-row lg:space-x-5">
          <div className=" flex w-full flex-col items-start  pb-4 text-left lg:w-2/3">
            <div className="flex flex-col">
              {pinned && (
                <span className="absolute right-0 top-0 flex flex-row">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-45"
                  >
                    <path
                      d="M10 9L12 11V13H7V19L6 20L5 19V13H0V11L2 9V2H1V0H11V2H10V9Z"
                      fill="rgb(139 92 246)"
                    />
                  </svg>
                </span>
              )}
              <span className="text-xl font-light uppercase tracking-widest text-violet-500">
                {projectTitle}
              </span>
              <span className="text-4xl font-black text-gray-900 dark:text-gray-300">
                {title}
              </span>
              <span className="mt-4 text-lg text-gray-900 dark:text-gray-300 font-medium">
                {description}{" "}
                <span className="ml-2 text-violet-500">{year}</span>
              </span>

              {/* {techStack && (
                <div className="mt-2 grid w-[350px] grid-cols-[_auto_auto_auto] gap-x-2 gap-y-1 md:grid-cols-[repeat(10,_1fr)]">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-lg font-light text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )} */}
              {tags && (
                <div className="mt-2 grid w-full max-w-min grid-cols-[_auto_auto_auto] flex-row gap-3 md:grid-cols-[_auto_auto_auto_auto]">
                  {tags.map((tag) => {
                    const icon = tagIcons[tag];

                    return (
                      <div
                        key={tag}
                        className={classNames(
                          "relative flex w-full min-w-max max-w-[250px] flex-row items-center justify-center space-x-2  rounded-lg border border-zinc-700 bg-opacity-60 px-2 py-1 text-sm font-medium text-zinc-800 shadow-xl backdrop-blur-lg dark:bg-zinc-800 dark:text-zinc-300"
                        )}
                      >
                        {icon}
                        <span>{tag}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="mt-8">
              <Link href={href}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="underline-gradient-on-group-hover underline-gradient-only underline-gradient pb-2  text-2xl dark:hover:text-white hover:text-black"
                >
                  View Project
                </a>
              </Link>
            </div>
          </div>
          {!!image && (
            <div
              className={classNames(
                "relative mb-8 flex h-[300px] w-full items-center justify-center rounded-lg lg:mb-0  lg:w-[450px]",
                imageClassName
              )}
            >
              <Image
                src={image}
                alt={title + "_image"}
                layout="fill"
                className="rounded-2xl object-cover transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-60"
              />
            </div>
          )}
        </div>
      </Fade>
    );
  }

  return (
    <div
      id="work"
      className="relative mb-40 flex flex-col justify-center md:scroll-m-20"
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
      <div className="flex flex-col space-y-12">
        {/* <Project title="Personal Portfolio" href="https://waldemar.dev" /> */}
        <Project
          title="Reward your followers with crypto and build a community"
          projectTitle="Cashrain"
          description="Cashrain is a platform where creators create communities for their members. People can send Bitcoin Cash (BCH) 'rain' to the communities, and this BCH gets distributed randomly amongst the community members."
          techStack={[
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Blockchain",
          ]}
          href="https://cashrain.com"
          image="/images/cashrain.png"
          counter={1}
          year="2022"
          tags={["Frontend", "Design", "Blockchain"]}
          pinned
        />
        <Project
          title="Your Social Crypto Wallet - The Future of Tipping"
          projectTitle="CoinKit"
          description="CoinKit is a social crypto wallet that allows you to send and receive crypto tips on social media, which is used by 400.000+ people in developing countries to send and retrieve money."
          techStack={["React", "Next.js", "JavaScript", "TailwindCSS"]}
          href="https://app.coinkit.de"
          image="/images/coinkit_app.png"
          counter={2}
          year="2021"
          tags={["Frontend", "Design", "Blockchain"]}
          pinned
        />
        <Project
          title="My Portfolio"
          projectTitle="waldemar.dev"
          description="My portfolio website (the one you are currently at). I built & designed this website to showcase my work and connect with clients."
          techStack={["React", "Next.js", "TypeScript", "TailwindCSS"]}
          href="https://waldemar.dev"
          counter={3}
          year="2023"
          tags={["Frontend", "Design"]}
          pinned
        />
        <Project
          title="The First Web3 Winestore"
          projectTitle="Cryptograpes"
          description="Cryptograpes is the first web3 winestore that allows you to buy wine with your custom NFT label on it. Verify your ownership with a wallet of your choice and get it delivered to your door."
          techStack={[
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Web3",
            "Node.js",
            "Strapi",
          ]}
          href="https://cryptograpes.club"
          image="/images/cryptograpes_club.png"
          counter={4}
          year="2022"
          tags={["Frontend", "Design", "Backend", "Blockchain"]}
          pinned
        />
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
        <div className="z-10 md:absolute md:right-20 md:-top-6">
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
          damping={0.1}
          delay={500}
          className="mt-8 flex flex-col gap-4 text-left text-lg dark:font-normal font-medium md:w-1/2"
        >
          <p>
            Hey! My name is{" "}
            <span className="font-normal text-black dark:text-white">
              Waldemar
            </span>
            . I&apos;m a{" "}
            <span className="underline-gradient-no-hover px-1 font-semibold text-gray-900 dark:text-gray-200">
              full-stack web developer
            </span>{" "}
            located in Munich, Germany. I have a huge passion for creating
            intuitive and interactive{" "}
            <span className="underline-gradient-no-hover whitespace-nowrap px-1 font-semibold text-gray-900 dark:text-gray-200">
              user experiences
            </span>
            .
          </p>
          <p>
            From solo-projects to working in a team, I have experience in all
            aspects of the development cycle. I&apos;m always looking for
            opportunities to work on{" "}
            <span className="underline-gradient-no-hover px-1 font-semibold text-gray-900 dark:text-gray-200">
              meaningful projects
            </span>{" "}
            with{" "}
            <span className="underline-gradient-no-hover px-1 font-semibold text-gray-900 dark:text-gray-200">
              like minded people
            </span>
            .
          </p>
          <p>
            I take a collaborative approach to my work, and I&apos;m always
            looking for ways to bring value to my clients and their users.
            Whether you&apos;re looking for a new website, a redesign, or just
            want to improve the user experience of your existing site, I&apos;m
            ready to help you achieve your goals.
          </p>
          <p>
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

function Contact() {
  return (
    <Fade triggerOnce delay={1000}>
      <div
        id="contact"
        className="relative flex flex-col justify-center md:scroll-m-20"
      >
        <div className="flex flex-row items-center md:w-3/4">
          <span className="min-w-fit text-right text-xl font-light uppercase tracking-widest md:text-3xl">
            Contact
          </span>
          <hr className="ml-12 w-4/5 border-2 border-violet-500/20" />
        </div>
        <div className="mt-8 text-left text-lg dark:font-normal font-medium md:w-1/2">
          <p>
            I&apos;m excited to hear from you! Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <p className="mt-4">
            If you have any problems that I can help you solve or if you have a
            project that you want to discuss, please feel free to reach out to
            me.
          </p>
          <button className="mt-8">
            <a href="mailto:hello@waldemar.dev">
              <span className="gradient-bg rounded-md px-3 py-1 text-2xl font-semibold text-white">
                hello@waldemar.dev
              </span>
            </a>
          </button>
        </div>
      </div>
    </Fade>
  );
}
export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div
      className={`absolute hidden opacity-20 blur-xl lg:flex ${className}`}
    />
  );
}
