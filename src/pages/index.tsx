import type { NextPage } from "next";

const Home: NextPage = () => {


  return (
    <div className="flex w-full max-w-5xl flex-1 flex-col pb-[1000px]">
      <div className="flex h-screen flex-col justify-between ">
        <div className="mt-40 w-full text-left">
          <span className="flex-nowrap text-xl font-thin">Hi, my name is</span>
          <h1 className="gradient mt-2 bg-clip-text text-6xl font-bold text-transparent">
            Waldemar Panin<span className="text-gray-300">.</span>
          </h1>
          <h2 className="pb-6 text-6xl font-bold">
            I build things for the{" "}
            <span className="gradient bg-clip-text text-transparent">web</span>
            <span className="text-gray-300">.</span>
          </h2>
          <p className="mt-2 w-3/5 text-xl font-light">
            I&apos;m a software engineer based in Munich, Germany. I specialize
            in building (and occasionally designing) exceptional websites,
            applications, and everything in between.
            <p className="mt-4">Let&apos;s build something together. </p>
          </p>
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
        {/** animated scroll indicator */}
        <a href="#aboutme">
          <div className=" group mb-24 flex flex-col items-center justify-center gap-4">
            <span className="font-light uppercase tracking-widest">Scroll</span>
            <div className="mx-auto h-[48px] border-l border-violet-500 transition-all duration-300 ease-in-out group-hover:h-[128px]" />
          </div>
        </a>
      </div>
      {/* About me */}
      <div
        id="aboutme"
        className="mt-[128px] flex scroll-m-8 flex-col justify-center"
      >
        <div className="flex w-3/4 flex-row items-center">
          <span className="min-w-fit text-right text-3xl font-extralight">
            About me
          </span>
          <hr className="mx-12 w-2/5 border-violet-500/30" />
        </div>
        <p className="mt-8 w-1/2 text-left font-light">
          Hey! My name is <span className="gradient-bg px-1">Waldemar</span> .
          I&apos;m a full-stack web developer located in Munich, Germany. I have
          a huge passion for the frontend and{" "}
          <span className="whitespace-nowrap">UI / UX design.</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Etiam quis sagittis quam,
          ac bibendum metus. Etiam a luctus neque. Morbi non scelerisque neque.
          Sed malesuada tristique tellus. Nam sed nisi eu dolor convallis
          eleifend sed vitae tellus. Morbi ac congue risus. Proin bibendum sem
          vitae nulla egestas, vel tempor massa sodales. Praesent aliquet dictum
          eros, eget dictum sapien vulputate id. Phasellus lacinia molestie nibh
          sit amet consequat.
        </p>
      </div>
    </div>
  );
};

export default Home;
