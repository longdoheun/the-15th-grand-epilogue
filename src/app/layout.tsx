import { childrenProps } from "@/types/childrenProps";
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { KAKAO_API_KEY } from "../lib/Config";
import "../../public/static/fonts/fonts.css";
import "./globals.css";
import Recoil from "@/Layout/Recoil";
import Background from "@/components/WavyLine/Background";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const SourceSerif = Source_Serif_4({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  title: "The 15th Grand Epilogue",
  description:
    "글로벌경제학과 15주년 기념 게필로그 행사에 글로벌경제학과 가족분들을 모십니다.",
  openGraph: {
    type: "website",
    url: "https://the-15th-grand-epilogue.vercel.app/",
    title: "The 15th Grand Epilogue",
    description:
      "글로벌경제학과 15주년 기념 게필로그 행사에 글로벌경제학과 가족분들을 모십니다.",
    siteName: "Grand Epilogue",
    images: [
      {
        url: "/static/image/og-image.png",
      },
    ],
  },
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`}
        // strategy="beforeInteractive"
      />
      {/* <GoogleAnalytics GA_MEASUREMENT_ID="G-F5TVD4WGZW" /> */}
      <body className={SourceSerif.className}>
        <Recoil>
          <Background />
          {children}
        </Recoil>
      </body>
    </html>
  );
}
