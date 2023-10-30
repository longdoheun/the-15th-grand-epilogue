import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export type PhotoProps = {
  url: string;
  alt: string;
};

export default function Photo({ url, alt }: PhotoProps) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="photo"
    >
      {isHover && (
        <div onClick={() => router.push(url)} className="gray-bg">
          <span className="photo-exp">{alt}</span>
        </div>
      )}
      <Image src={url} alt={alt} style={{ objectFit: "cover" }} fill />
    </div>
  );
}
