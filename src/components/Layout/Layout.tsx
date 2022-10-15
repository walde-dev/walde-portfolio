import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black py-2 text-white ">
      <Head>
        <title>waldemar.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
