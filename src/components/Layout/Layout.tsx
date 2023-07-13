import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import InfoBanner from "../InfoBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center overflow-hidden  bg-[hsl(240,43%,1%)] text-gray-300">
      <Head>
        <title>Waldemar Panin - Freelance Full Stack Web Developer</title>
        <meta
          name="description"
          content="I'm a software engineer based in Munich, Germany. I specialize in building & designing exceptional websites & applications"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <InfoBanner />
      <Sidebar />
      <main className="flex min-h-screen w-full flex-1 flex-col items-center py-12 px-6 text-center md:mb-24 md:py-0 md:px-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
