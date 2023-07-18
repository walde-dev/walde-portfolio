import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
};

export default MyApp;
