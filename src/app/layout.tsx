import { childrenProps } from "@/types/childrenProps";
import "../../public/static/fonts/fonts.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({ subsets: ["cyrillic"] });

// meta data will be shown as mobile card
export const metadata: Metadata = {
  title: "The 15th Grand Epilogue",
  description:
    "글로벌경제학과 15주년 기념 게필로그 행사에 글로벌경제학과 가족분들을 모십니다.",
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
