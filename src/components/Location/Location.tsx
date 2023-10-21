import AppLayout from "@/Layout/AppLayout";
import React from "react";
import KakaoMap from "./KakaoMap";
import "@/styles/Location/Location.css";

export default function Location() {
  return (
    <div className="invitation-con">
      <AppLayout.Main>
        <div className="location-title">Location</div>
        <section className="location-name">
          <div className="locattion-name-main">600주년 기념관 6F 조병두홀</div>
          <div className="locattion-name-sub">
            서울 종로구 성균관로 25-2 성균관대학교
          </div>
        </section>
        <section className="location-left">
          <KakaoMap />
        </section>
        <section className="invitation-right">다른 사람들에게 공유하기</section>
      </AppLayout.Main>
      {/* <div className="invitation-container"></div> */}
    </div>
  );
}
