import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import classNames from "classnames";
import Link from "next/link";
import ThemeButton from "../components/ThemeButton";
import FrontendIcon from "../components/icons/FrontendIcon";
import BackendIcon from "../components/icons/BackendIcon";
import DesignIcon from "../components/icons/DesignIcon";
import BlockchainIcon from "../components/icons/BlockchainIcon";
import { SocialList } from "../components/Sidebar";
import ContactForm from "../components/ContactForm";
import InfoBanner from "../components/InfoBanner";
import { twMerge } from "tailwind-merge";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col md:pt-[100px]">
      <div className="flex h-full flex-col justify-between md:h-screen">
        <div className="relative flex w-full flex-col space-y-4 text-left">
          <Fade cascade damping={0.2} triggerOnce className="relative">
            <div className="fixed h-screen w-screen">
              <BackgroundGlow className="gradient -left-1/4 h-[500px] w-[500px] animate-wiggle rounded-full bg-gradient-to-r from-[#965de9] to-[#6358ee]" />
              <BackgroundGlow className="gradient left-1/4 h-[400px] w-[400px] animate-wiggle2 rounded-full bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D] " />
              <BackgroundGlow className="gradient animation-delay-2000 right-1/4 h-[450px]  w-[450px] animate-wiggle rounded-full bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]" />
              <BackgroundGlow className="gradient animation-delay-2000 bottom-0 left-0 h-[450px] w-[450px] animate-wiggle2 rounded-full bg-gradient-to-r from-[#c81d77] to-[#6710c2]" />
              <BackgroundGlow className="gradient animation-delay-4000 bottom-0  right-1/4 h-[450px] w-[450px] animate-wiggle rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]" />
              <BackgroundGlow className="gradient animation-delay-4000 right-1/2 top-1/2 h-[450px] w-[450px] animate-wiggle2 rounded-full bg-gradient-to-r from-[#ff758c] to-[#ff7eb3]" />
            </div>
            <div className="flex  items-center justify-between md:flex-row">
              <div className="">
                <div className="font-bold">
                  <h2 className="text-4xl  sm:text-5xl md:text-6xl">
                    I built beautiful <br />
                    things for the{" "}
                    <span className="gradient bg-gradient-to-r from-[#965de9] to-[#6358ee] bg-clip-text text-transparent">
                      web
                    </span>
                    <br />
                  </h2>
                  <span className="-mt-2 text-3xl sm:text-4xl">
                    & design them too.
                  </span>
                </div>
                <p className="mt-8 text-xl font-normal dark:font-light md:w-[85%]">
                  <span className="font-semibold">
                    Frontend Developer & UI/UX Designer at{" "}
                    <a
                      href="https://blockcurators.com"
                      rel="noreferrer noopener"
                      target="_blank"
                      className=" underline decoration-2 underline-offset-2"
                    >
                      Blockcurators
                    </a>
                  </span>
                  <br />I specialize in building & designing exceptional
                  websites, applications, and everything in between. <br />{" "}
                  <br />
                </p>
                <div className="flex items-center justify-center md:block">
                  <button className="learn-more mt-4">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <a href="#work" className="button-text text-violet-400">
                      View my work
                    </a>
                  </button>
                </div>
              </div>
              <WelcomeInfo className="hidden lg:flex" />
            </div>
          </Fade>
        </div>
        {/** animated scroll indicator */}
        <a href="#work" className="group">
          <Zoom
            cascade
            damping={0.3}
            delay={1600}
            triggerOnce
            className="mt-12 flex flex-col items-center justify-center gap-4 md:mb-24 md:mt-0"
          >
            <span className="font-light uppercase tracking-widest">Scroll</span>
            <div className="mx-auto h-[48px] border-l border-violet-500 transition-all duration-300 ease-in-out group-hover:h-[128px]" />
          </Zoom>
        </a>
      </div>

      <WelcomeInfo className="mt-[200px] flex lg:hidden" />

      <div className="mt-[128px] flex flex-col gap-24">
        <Fade cascade damping={0.2} triggerOnce>
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
  Frontend: <FrontendIcon />,
  Backend: <BackendIcon />,
  Design: <DesignIcon />,
  Blockchain: <BlockchainIcon />,
};

function MyWork() {
  function Project({
    title,
    href,
    image,
    imageClassName,
    extraImage,
    projectTitle,
    accentClassName,
    iconClassName,
    description,
    techStack,
    users,
    award,
    counter,
    year,
    pinned = false,
    className,
    tags,
  }: {
    title: string;
    href: string;
    image?: string;
    className?: string;
    imageClassName?: string;
    accentClassName?: string;
    iconClassName?: string;
    extraImage?: string;
    projectTitle?: string;
    description?: string;
    techStack?: string[];
    users?: string;
    award?: string;
    counter: number;
    year: string;
    pinned?: boolean;
    tags?: Tag[];
  }) {
    const isVideo = image?.endsWith(".mp4");
    return (
      <Zoom cascade damping={0.8} delay={120 * counter} triggerOnce>
        <div
          className={classNames(
            className,
            "project-card group relative flex h-full w-full flex-1 flex-col rounded-[32px] border border-black/40 px-6 pt-6 text-white shadow-xl @container dark:border-white/40"
          )}
        >
          <div className="absolute -top-5 left-1/2 z-10 mx-auto flex -translate-x-1/2 flex-col">
            {!!users && (
              <div
                className={classNames(
                  accentClassName,
                  "relative flex max-w-fit  flex-row items-center justify-center space-x-2 rounded-[32px]  px-2 py-1 text-sm font-bold shadow-md backdrop-blur-lg"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className={classNames(iconClassName, "h-5 w-5 fill-white")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="whitespace-nowrap">{users} monthly users</span>
              </div>
            )}
            {!!award && (
              <div
                className={classNames(
                  accentClassName,
                  "relative flex max-w-fit flex-row items-center justify-center space-x-2 rounded-[32px]  px-2 py-1 text-sm font-bold shadow-md"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className={classNames(iconClassName, "h-5 w-5 fill-white")}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>

                <span className="">{award}</span>
              </div>
            )}
          </div>
          <div className="">
            {!!image && !isVideo && (
              <a
                href={href}
                className="relative flex h-[300px] w-full items-center  justify-center rounded-lg hover:cursor-pointer md:h-[250px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  className={classNames(
                    "relative h-full w-full rounded-lg ",
                    imageClassName
                  )}
                >
                  <Image
                    src={image}
                    alt={title + "_image"}
                    layout="fill"
                    className="rounded-2xl object-cover transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            )}

            {!!image && isVideo && (
              <a
                href={href}
                className="relative mx-auto h-[300px] w-full max-w-[700px] rounded-2xl hover:cursor-pointer md:h-[300px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={classNames("relative rounded-2xl", imageClassName)}
                >
                  <source src={image} className="" type="video/mp4" />
                </video>
              </a>
            )}

            <div className="mt-4 flex w-full flex-col items-start  pb-4 text-left">
              <div className="flex max-w-full flex-col">
                <span className="w-full text-left text-4xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                  {projectTitle}
                </span>
                <div className="mt-2 flex flex-col">
                  <span className="text-left text-xl font-black text-gray-100 md:text-2xl">
                    {title}
                  </span>
                </div>
                {/* <span className="mt-2 text-lg font-medium text-white">
                  {description}{" "}
                  <span className="font-bold text-white">{year}</span>
                </span> */}

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
              </div>
              {!!extraImage && (
                <div className="relative h-[500px] w-full ">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={extraImage}
                    alt={title + "_extra"}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 flex flex-col space-y-6">
            {tags && (
              <div className="flex flex-col">
                <span className="text-left text-lg font-bold text-white">
                  Role
                </span>
                <div className="mt-1 grid w-full max-w-min grid-cols-[_auto_auto] gap-2 @xl:grid-cols-[_auto_auto_auto_auto] md:grid-cols-[_auto_auto_auto]">
                  {tags.map((tag) => {
                    const icon = tagIcons[tag];

                    return (
                      <div
                        key={tag}
                        className={classNames(
                          accentClassName,
                          "relative flex w-full min-w-max max-w-[250px] flex-row items-center justify-center space-x-2  rounded-lg px-2 py-1 text-sm font-bold shadow-md backdrop-blur-lg "
                        )}
                      >
                        {icon}
                        <span className="text-white">{tag}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <Link href={href} className="">
            <a
              rel="noreferrer"
              target="_blank"
              className="group/button mx-auto mb-4 mt-auto flex w-full flex-row items-center justify-center space-x-2 rounded-2xl  bg-white px-6 py-2 text-lg font-semibold text-gray-900 transition-all duration-300 ease-in-out md:mx-0 md:ml-auto md:max-w-fit "
            >
              <span>View Project</span>
              <div className="w-0 scale-0 opacity-80 transition-all duration-500 ease-in-out group-hover/button:w-auto group-hover/button:max-w-full group-hover/button:scale-100 group-hover/button:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </Zoom>
    );
  }

  return (
    <div
      id="work"
      className="relative mb-40 flex flex-col justify-center md:scroll-m-20"
    >
      <div className="relative rounded-xl pb-1 pt-6">
        <Fade triggerOnce>
          <div className="flex flex-row items-center ">
            <span className="min-w-fit text-right text-xl font-semibold  uppercase md:text-3xl">
              My Work
            </span>
            <hr className="ml-12 w-full border border-violet-500/20" />
            <div className="">
              <Image
                className="object-contain"
                src="/images/kiss.png"
                width={500}
                height={500}
                alt="hello"
              />
            </div>
          </div>
        </Fade>
      </div>

      <div className="group grid grid-flow-dense grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-[repeat(2,_1fr)]">
        {/* <Project title="Personal Portfolio" href="https://waldemar.dev" /> */}
        <Project
          title="Reward your followers with crypto"
          projectTitle="Cashrain"
          description="Cashrain is a platform where creators create communities for their members. People can send Bitcoin Cash (BCH) 'rain' to the communities, and this BCH gets distributed randomly amongst the community members."
          techStack={[
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Blockchain",
          ]}
          className="bg-gradient-to-b  from-[#15D9A5] to-[#5FC7CE]"
          accentClassName="bg-[#15D9A5] shadow-xl border border-black/30 text-white"
          iconClassName="fill-white"
          users="150 000+"
          href="https://cashrain.com"
          image="/images/cashrain/cashrain_main.png"
          // extraImage="/images/cashrain/cashrain_extra.png"
          counter={1}
          year="2022"
          tags={["Frontend", "Design"]}
          pinned
        />
        <Project
          title="Your Social Crypto Wallet - The Future of Tipping"
          projectTitle="CoinKit"
          description="CoinKit is a social crypto wallet that allows you to send and receive crypto tips on social media, which is used by 400.000+ people in developing countries to send and retrieve money."
          users="60 000+"
          className="bg-gradient-to-b from-[#10B2DD] to-[#7E7BFF]"
          accentClassName="bg-[#10B2DD] shadow-xl border border-black/30 text-white"
          iconClassName="fill-white"
          techStack={["React", "Next.js", "JavaScript", "TailwindCSS"]}
          href="https://app.coinkit.de"
          image="/images/coinkit.mp4"
          counter={2}
          year="2021"
          tags={["Frontend", "Design"]}
          pinned
        />
        <Project
          title="Decentralized Freelance Hiring Platform"
          projectTitle="Decentralance"
          description="Built during the EthMunich 2023 Hackathon, Winner of the Starknet Bounty. Decentralance is a decentralized freelance hiring platform on the polygon chain."
          techStack={["React", "Next.js", "JavaScript", "TailwindCSS"]}
          award="Starknet Bounty Winner"
          className="bg-[#8f72ec]"
          accentClassName="bg-[#8565EE] shadow-xl border border-black/30 text-white"
          iconClassName="fill-white"
          href="https://decentralance.vercel.app"
          image="/images/decentralance.png"
          counter={3}
          year="2023"
          tags={["Frontend", "Design"]}
          pinned
        />
        {/* <Project
          title="My Portfolio"
          projectTitle="waldemar.dev"
          description="My portfolio website (the one you are currently at). I built & designed this website to showcase my work and connect with clients."
          techStack={["React", "Next.js", "TypeScript", "TailwindCSS"]}
          href="https://waldemar.dev"
          counter={4}
          year="2023"
          tags={["Frontend", "Design"]}
          pinned
        /> */}
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
          award="0 -> 1 web3 store"
          counter={4}
          className="bg-[#ed5681]"
          accentClassName="bg-[#EE3F71] shadow-xl border border-black/40 text-white"
          iconClassName="fill-white"
          year="2022"
          tags={["Frontend", "Design", "Backend"]}
          pinned
        />
      </div>
      <hr className="mx-12 mt-12  opacity-10" />
      <span className="mt-8 text-left text-gray-600 dark:text-gray-400">
        For design ideas, prototypes & concepts you can check out my{" "}
        <a
          href="https://layers.to/walde"
          rel="noreferrer noopener"
          target="_blank"
          className="decoration group inline underline decoration-violet-500 underline-offset-2 hover:text-black dark:hover:text-white"
        >
          layers.to profile
        </a>
      </span>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col justify-center  md:scroll-m-20"
    >
      <div className="relative rounded-xl pb-12 pt-6">
        <div className="z-10 lg:absolute lg:-top-6 lg:right-20">
          <div className="relative">
            <Fade triggerOnce delay={200}>
              <BackgroundGlow className="gradient animation-delay-2000 inset-x-44 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#965de9] to-[#6358ee] opacity-5" />
              <div className="absolute inset-x-6 h-full w-full rounded-full border border-violet-500/20 " />
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
          <div className="flex flex-row items-center lg:w-3/4">
            <span className="min-w-fit text-right text-xl font-semibold uppercase md:text-3xl">
              About me
            </span>
            <hr className="ml-12 w-4/5 border border-violet-500/20" />
          </div>
        </Fade>
        <Fade
          triggerOnce
          cascade
          damping={0.1}
          delay={300}
          className="mt-8 text-left text-lg font-normal lg:w-1/2"
        >
          <p>
            Hey! My name is Waldemar. I&apos;m a frontend web developer &
            designer located in Munich, Germany. I have a huge passion for
            creating intuitive and interactive user experiences.
          </p>
          <p>
            I have designed, built and launched multiple web projects for
            clients and myself. Many of these projects are being used by tens of
            thousands of people every month.
          </p>
          <hr className="border border-violet-500/20 " />

          {/* <p>
            I take a collaborative approach to my work, and I&apos;m always
            looking for ways to bring value to my clients and their users.
            Whether you&apos;re looking for a new website, a redesign, or just
            want to improve the user experience of your existing site, I&apos;m
            ready to help you achieve your goals.
          </p> */}
          <p>
            Additionally, I am very passionate about blockchain technology and
            the future of the web. I&apos;m currently working on a few projects
            in the blockchain space, and I&apos;m always looking for new
            opportunities to learn and grow. I think that the UX aspect of
            current web3 projects is lacking, and I want to change that.
            <span className="bg-gradient-to-r from-[#965de9] to-[#695eff] bg-clip-text font-semibold text-transparent">
              {" "}
              One rectangle at a time
            </span>
            .
          </p>
          <hr className="border border-violet-500/20 " />

          <p>
            On one hand, I am way more passionate and skilled in the UI/UX
            aspect of a web project than the average frontend developer.
          </p>
          <p>
            On the other hand, I am a lot more skilled and experienced in the
            frontend developing aspect of a web project than the average UI/UX
            designer. This combination creates a unique skillset that is very
            valuable for any web project.
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
          <div className="gradient absolute -inset-0.5 rounded-full border bg-gradient-to-r from-[#965de9] to-[#6358ee] blur-sm" />
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
        <hr className="mr-12 w-4/5 border border-violet-500/30" />
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
        <div className="flex flex-row items-center lg:w-3/4">
          <span className="min-w-fit text-right text-xl font-semibold  uppercase md:text-3xl">
            Contact
          </span>
          <hr className="ml-12 w-4/5 border border-violet-500/20" />
        </div>
        <div className="mt-4 w-2/3 text-left font-medium text-gray-800 dark:font-normal dark:text-gray-200 md:w-1/2">
          <p>
            I&apos;m excited to hear from you! Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <p className="mt-4">
            If you have any problems that I can help you solve or if you have a
            project that you want to discuss, please feel free to reach out to
            me.
          </p>
        </div>
        <div className="mt-8 w-full lg:mt-12 lg:w-1/2">
          <ContactForm />
        </div>
        <div className="mt-12 flex w-full justify-center lg:hidden">
          <SocialList className="flex-row" />
        </div>
      </div>
    </Fade>
  );
}
export function BackgroundGlow({ className }: { className?: string }) {
  //track scroll y position
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollY);

  return (
    <div
      style={{ marginBottom: `${scrollY * 0.03}vh` }}
      className={`dark:blur-[100px] blur-[70px]  absolute hidden border opacity-30 dark:opacity-[15%] bg-blend-multiply lg:flex ${className}`}
    />
  );
}

function WelcomeInfo({ className }: { className?: string }) {
  return (
    <Zoom delay={600} triggerOnce>
      <div
        className={classNames(
          "group rotate-[3deg] flex-col items-center justify-center whitespace-nowrap",
          className
        )}
      >
        <span className="flex-nowrap text-lg font-light uppercase md:text-xl">
          Hi, my name is{" "}
          <span className="gradient whitespace-nowrap bg-gradient-to-r from-[#965de9] to-[#6358ee] bg-clip-text font-semibold text-transparent">
            Waldemar Panin
          </span>
        </span>
        <div className="relative scale-100 object-contain transition-all duration-500 ease-in-out group-hover:absolute group-hover:scale-0 group-hover:opacity-0  group-hover:duration-100">
          <Image
            className="object-contain"
            src="/images/hello.png"
            width={300}
            height={300}
            alt="hello"
          />
        </div>
        <div className="absolute scale-0 transition-all duration-100 ease-in-out group-hover:relative group-hover:block group-hover:scale-100 group-hover:duration-500">
          <Image
            className="object-contain"
            src="/images/mac.png"
            width={300}
            height={300}
            alt="hello"
          />
        </div>
        <InfoBanner />
      </div>
    </Zoom>
  );
}
