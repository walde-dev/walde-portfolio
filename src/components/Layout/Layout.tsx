import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import InfoBanner from "../InfoBanner";
import { BackgroundGlow } from "../../pages";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-screen max-w-full flex-col items-center overflow-hidden text-gray-900 dark:bg-[#000000] dark:text-gray-300">
      <Head>
        <title>Waldemar Panin - Freelance Full Stack Web Developer</title>
        <meta
          name="description"
          content="I'm a software engineer based in Munich, Germany. I specialize in building & designing exceptional websites & applications"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed h-screen w-screen">
        <BackgroundGlow className="gradient left-0 h-[150px] w-[150px] rotate-45 animate-[wiggleLeft_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#965de9] to-[#6358ee] md:h-[300px] md:w-[300px]" />
        <BackgroundGlow className="gradient animation-delay-2000 left-0 top-1/4 h-[175px] w-[175px] rotate-90 animate-[wiggleLeft_9s_linear_infinite] rounded-full bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D] md:h-[250px] md:w-[250px] " />
        <BackgroundGlow className="gradient animation-delay-4000 -left-40 top-1/2 h-[250px] w-[250px] rotate-12 animate-[wiggleLeft_15s_linear_infinite]  rounded-full bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] md:h-[500px] md:w-[500px]" />
        <BackgroundGlow className="gradient right-0 h-[225px] w-[225px] md:h-[450px] md:w-[450px] rotate-45 animate-[wiggleRight_20s_linear_infinite] rounded-full bg-gradient-to-r from-[#c81d77] to-[#6710c2]" />
        <BackgroundGlow className="gradient animation-delay-2000 right-0 top-1/4  h-[225px] w-[225px] md:h-[450px] md:w-[450px]  rotate-90 animate-[wiggleRight_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]" />
        <BackgroundGlow className="gradient animation-delay-4000 right-40 top-1/2 h-[225px] w-[225px] md:h-[450px] md:w-[450px] rotate-12 animate-[wiggleRight_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#ff758c] to-[#ff7eb3]" />
      </div>
      <Header />
      <Sidebar />
      <main className="flex min-h-screen w-full flex-1 flex-col items-center overflow-hidden px-6 py-12 text-center md:mb-24 md:px-20 md:py-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
