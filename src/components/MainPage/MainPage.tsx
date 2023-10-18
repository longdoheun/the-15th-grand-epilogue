import AppLayout from "@/Layout/AppLayout";
import MainText from "./MainText";
import "@/styles/MainPage/MainPage.css";

export default function MainPage() {
  return (
    <AppLayout.Main>
      <section className="section-left">
        <MainText />
      </section>
      <section className="section-right">
        <div className="main-page-info">
          <div>2023.11.24. FRI. 19:00 ~</div>
          <div>SKKU 600th Anniversary building</div>
          <div>Dress Code : Black & White</div>
        </div>
      </section>
    </AppLayout.Main>
  );
}
