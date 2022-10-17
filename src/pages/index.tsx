import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col pb-[1000px]">
      <div className="flex md:h-screen h-full flex-col justify-between ">
        <div className="md:mt-40 mt-12 w-full text-left">
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
          <div className=" group mt-12 md:mt-0 md:mb-24 flex flex-col items-center justify-center gap-4">
            <span className="font-light uppercase tracking-widest">Scroll</span>
            <div className="mx-auto h-[48px] border-l border-violet-500 transition-all duration-300 ease-in-out group-hover:h-[128px]" />
          </div>
        </a>
      </div>
      {/* About me */}
      <div
        id="aboutme"
        className="mt-[128px] flex scroll-m-20 md:scroll-m-8 flex-col justify-center"
      >
        <div className="flex flex-row items-center md:w-3/4">
          <span className="min-w-fit text-right text-xl font-light md:text-3xl">
            About me
          </span>
          <hr className="ml-12 w-4/5 border-violet-500/30" />
        </div>
        <div className="mt-8 text-left font-light md:w-1/2">
          <p>
            Hey! My name is <span className="gradient-bg px-1">Waldemar</span>.
            I&apos;m a full-stack web developer located in Munich, Germany. I
            have a huge passion for the frontend and{" "}
            <span className="whitespace-nowrap">
              UI / UX design. Eleifend sed vitae tellus.
            </span>
          </p>
          <p>
            Morbi ac congue risus. Proin bibendum sem vitae nulla egestas, vel
            tempor massa sodales. Praesent aliquet dictum eros, eget dictum
            sapien vulputate id. Phasellus lacinia molestie nibh sit amet
            consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            sagittis quam, ac bibendum metus. Etiam a luctus neque. Morbi non
            scelerisque neque. Sed malesuada tristique tellus. Nam sed nisi eu
            dolor convallis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
