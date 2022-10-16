import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full max-w-5xl ">
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
          I&apos;m a software engineer based in Munich, Germany. I specialize in
          building (and occasionally designing) exceptional websites,
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
    </div>
  );
};

export default Home;
