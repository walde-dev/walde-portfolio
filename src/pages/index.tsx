import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col pb-[1000px]">
      <div className="flex h-full flex-col justify-between md:h-screen ">
        <div className="mt-12 w-full text-left md:mt-40">
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
      className="relative flex  flex-col justify-center md:scroll-m-20"
    >
      <div className="absolute right-12">
        <Image
          src="/images/walde_portrait.jpeg"
          alt="Waldemar Panin"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-row items-center md:w-3/4">
        <span className="min-w-fit text-right text-xl font-light md:text-3xl">
          About me
        </span>
        <hr className="ml-12 w-4/5 border-violet-500/30" />
      </div>
      <div className="mt-8 text-left text-lg font-light md:w-1/2">
        <p>
          Hey! My name is Waldemar. I&apos;m a{" "}
          <span className="gradient-bg px-1">full-stack web developer</span>{" "}
          located in Munich, Germany. I have a huge passion for creating
          intuitive and interactive{" "}
          <span className="gradient-bg px-1">user experiences</span>. I love to
          build in the web and help other people bring their ideas to life.
        </p>
      </div>
    </div>
  );
}

function Skillset() {
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
        <span className="min-w-fit text-right text-xl font-light md:text-3xl">
          Skillset
        </span>
      </div>
      <div className="mt-12 flex w-full flex-row items-center justify-center gap-8">
        {/** Design */}
        <div className="relative flex flex-col w-full  rounded-lg ">
          <div className="-inset-0.5 opacity-50 absolute gradient blur-sm" />
          <div className="relative bg-[hsl(238,43%,5%)] rounded-lg py-2 px-5 text-lg">Frontend</div>
        </div>
        {/** Frontend */}
        <div className="flex flex-col w-full rounded-lg py-4 px-12">123</div>
        {/** Backend */}
        <div className="flex flex-col w-full rounded-lg py-4 px-12">123</div>
      </div>
    </div>
  );
}
