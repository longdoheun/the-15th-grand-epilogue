import { childrenProps } from "@/types/childrenProps";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../../public/static/fonts/fonts.css";
import "./globals.css";
import TITLE from "../../public/static/image/title.png";

const inter = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({ subsets: ["cyrillic"] });

const meta = {
  type: "website",
  url: "https://the-15th-grand-epilogue.vercel.app/",
  title: "The 15th Grand Epilogue",
  description:
    "글로벌경제학과 15주년 기념 게필로그 행사에 글로벌경제학과 가족분들을 모십니다.",
  siteName: "Grand Epilogue",
  images: [
    {
      url: "/static/image/title.png",
    },
  ],
};
// meta data will be shown as mobile card
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    url: "https://the-15th-grand-epilogue.vercel.app/",
    title: meta.title,
    description: meta.title,
  },
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <body className={SourceSerif.className}>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
