import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import InfoBanner from "../InfoBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
 

  return (
    <div className="relative overflow-hidden max-w-full flex min-h-screen w-screen flex-col items-center dark:bg-[hsl(280,60%,1%)] dark:text-gray-300 text-gray-900">
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
      <main className="flex min-h-screen overflow-hidden w-full flex-1 flex-col items-center py-12 px-6 text-center md:mb-24 md:py-0 md:px-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
