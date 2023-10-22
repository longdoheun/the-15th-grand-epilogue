import AppLayout from "@/Layout/AppLayout";
import "@/styles/ImgPage/ImgPage.css";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { SERVER } from "@/assets/lib/Config";

export async function getPhotos() {
  try {
    const res = await fetch(`${SERVER}/photos`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default function ImgPage() {
  const data = use(getPhotos());
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    console.log("rendering start - useEffect");
    setPhotoList(data.results);
  }, []);

  console.log(photoList, "fetching in components");

  return (
    <div className="img-con">
      <AppLayout.Main>
        <div className="img-title">Global Economics Gallery</div>
        <section className="img-inner-con">
          {photoList.map((photo: any) => (
            <Image
              key={photo.id}
              src={photo.properties.image.files[0].file.url}
              alt="Picture of the author"
              width={200}
              height={200}
            />
          ))}
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
        </section>
      </AppLayout.Main>
    </div>
  );
}
