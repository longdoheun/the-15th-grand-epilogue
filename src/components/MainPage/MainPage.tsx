import AppLayout from "@/Layout/AppLayout";
import MainText from "./MainText";
import "@/styles/MainPage/MainPage.css";
import MainInfo from "./MainInfo";
import SignUp from "./SignUp";

export type MainPageProps = {
  isMain: boolean;
};

export default function MainPage({ isMain }: MainPageProps) {
  return (
    <AppLayout.Theme>
      <section className="section-left">
        <MainText />
      </section>
      <section className="section-right">
        {isMain ? <MainInfo /> : <SignUp />}
      </section>
    </AppLayout.Theme>
  );
}
