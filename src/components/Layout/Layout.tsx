import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import InfoBanner from "../InfoBanner";
import { BackgroundGlow } from "../../pages";
import localFont from "next/font/local";

const montreal = localFont({
  src: [
    {
      path: "../../../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-montreal",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${montreal.variable} relative flex min-h-screen w-screen max-w-full flex-col items-center overflow-hidden font-sans text-gray-900 dark:bg-[#000000] dark:text-gray-300`}
    >
      <Head>
        <title>Waldemar Panin - Web Developement and UI/UX Design</title>
        <meta
          name="description"
          content="I specialize in building and designing exceptional websites and applications, mainly for web3 projects"
        />

        <meta property="og:image" content="https://waldemar.dev/api/og" />

        <title>Waldemar Panin - Web Developement and UI/UX Design</title>
        <meta
          name="description"
          content="I specialize in building and designing exceptional websites and applications, mainly for web3 projects"
        />

        <meta property="og:url" content="https://waldemar.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Waldemar Panin - Web Developement and and UI/UX Design"
        />
        <meta
          property="og:description"
          content="I specialize in building and designing exceptional websites and applications, mainly for web3 projects"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="waldemar.dev" />
        <meta property="twitter:url" content="https://waldemar.dev" />
        <meta
          name="twitter:title"
          content="Waldemar Panin - Web Developement and UI/UX Design"
        />
        <meta
          name="twitter:description"
          content="I specialize in building an designing exceptional websites and applications, mainly for web3 projects"
        />
        <meta name="twitter:image" content="https://waldemar.dev/api/og" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed h-screen w-screen">
        <BackgroundGlow className="gradient left-0 h-[150px] w-[150px] rotate-45 animate-[wiggleLeft_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#965de9] to-[#6358ee] md:h-[300px] md:w-[300px]" />
        <BackgroundGlow className="gradient animation-delay-2000 left-0 top-1/4 h-[175px] w-[175px] rotate-90 animate-[wiggleLeft_9s_linear_infinite] rounded-full bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D] md:h-[250px] md:w-[250px] " />
        <BackgroundGlow className="gradient animation-delay-4000 -left-40 top-1/2 h-[250px] w-[250px] rotate-12 animate-[wiggleLeft_15s_linear_infinite]  rounded-full bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] md:h-[500px] md:w-[500px]" />
        <BackgroundGlow className="gradient right-0 h-[225px] w-[225px] rotate-45 animate-[wiggleRight_20s_linear_infinite] rounded-full bg-gradient-to-r from-[#c81d77] to-[#6710c2] md:h-[450px] md:w-[450px]" />
        <BackgroundGlow className="gradient animation-delay-2000 right-0 top-1/4  h-[225px] w-[225px] rotate-90 animate-[wiggleRight_10s_linear_infinite]  rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] md:h-[450px] md:w-[450px]" />
        <BackgroundGlow className="gradient animation-delay-4000 right-40 top-1/2 h-[225px] w-[225px] rotate-12 animate-[wiggleRight_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] md:h-[450px] md:w-[450px]" />
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
