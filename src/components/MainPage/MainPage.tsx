import MainText from "../MainText/MainText";
import "@/styles/MainPage.css";

export default function MainPage() {
  return (
    <div className="main-page-container">
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
    </div>
  );
}
