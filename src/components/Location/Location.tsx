import AppLayout from "@/Layout/AppLayout";
import React, { useState } from "react";
import KakaoMap from "./KakaoMap";
import "@/styles/Location/Location.css";

export default function Location() {
  // 성균관대학교 조병두홀 위치
  const initial = {
    latitude: 37.58749256737859,
    longitude: 126.99461913113926,
  };

  const [position, setPosition] = useState(initial);

  const onClickToOrigin = () => {
    console.log("it works");
    setPosition({
      latitude: 37.58749256737859,
      longitude: 126.99461913113926,
    });
  };

  return (
    <div className="location-con">
      <AppLayout.Main>
        {/* <div className="location-title">Location | 오시는 길</div> */}
        <section className="location-name">
          <div onClick={onClickToOrigin} className="locattion-name-main">
            600주년 기념관 6F 조병두홀
          </div>
          <div className="locattion-name-sub">
            서울 종로구 성균관로 25-2 성균관대학교
          </div>
        </section>
        <div className="map-cover">
          <section className="location-map">
            <KakaoMap
              latitude={position.latitude}
              longitude={position.longitude}
            />
          </section>
        </div>

        <section className="location-right">다른 사람들에게 공유하기</section>
      </AppLayout.Main>
      {/* <div className="invitation-container"></div> */}
    </div>
  );
}
