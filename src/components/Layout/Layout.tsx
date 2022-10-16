import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-[hsl(238,43%,5%)]  text-gray-300 ">
      <Head>
        <title>waldemar.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sidebar />
      <main className="flex w-full min-h-screen flex-1 flex-col items-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
