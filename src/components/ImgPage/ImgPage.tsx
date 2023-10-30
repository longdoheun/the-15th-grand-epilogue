import AppLayout from "@/Layout/AppLayout";
import "@/styles/ImgPage/ImgPage.css";
import React, { use, useEffect, useState } from "react";
import { SERVER } from "../../lib/Config";
import Photo from "./Photo";

export async function getPhotos() {
  try {
    const res = await fetch(`${SERVER}/photos`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default function ImgPage() {
  // const data = use(getPhotos());
  // const [photoList, setPhotoList] = useState([]);

  // useEffect(() => {
  //   console.log("rendering start - useEffect");
  //   setPhotoList(data.results);
  // }, []);

  // console.log(photoList, "fetching in components");

  {
    /* {data.results.map((photo: any) => (
            <Image
              key={photo.id}
              src={photo.properties.image.files[0].file.url}
              alt="Picture of the author"
              width={200}
              height={200}
            />
          ))} */
  }
  return (
    <div className="img-con">
      <AppLayout.Main>
        <div className="img-title">2023 Global Economics</div>
        <section className="img-inner-con">
          <Photo url={"/static/image/Saje.jpeg"} alt={"2023 춘천 사제동행"} />
          <Photo
            url={"/static/image/gelea.jpeg"}
            alt={"글로벌경제X글로벌리더 체육대회 '제리전'"}
          />
          <Photo
            url={"/static/image/saeteo.jpeg"}
            alt={"글로벌경제학과 새내기새로배움터"}
          />
          <Photo
            url={"/static/image/orientation.jpeg"}
            alt={"신입생 오리엔테이션"}
          />
          <Photo
            url={"/static/image/daedongjae.jpeg"}
            alt={"대동제 글로벌경제학과 주점"}
          />
          <Photo url={"/static/image/membership.jpeg"} alt={"23학번 기엠티"} />
        </section>
      </AppLayout.Main>
    </div>
  );
}
