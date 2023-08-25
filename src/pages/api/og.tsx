/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { BackgroundGlow } from "..";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const imageData = await fetch(
    new URL("/public/images/og.png", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        {/** @ts-ignore */}
        <img src={imageData} alt="Waldemar Panin" width={1280} height={832} />
      </div>
    ),
    {
      width: 1280,
      height: 832,
    }
  );
}

//        <BackgroundGlow className="gradient left-0 h-[150px] w-[150px] rotate-45 animate-[wiggleLeft_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#965de9] to-[#6358ee] md:h-[300px] md:w-[300px]" />
