import Image from "next/image";
import React from "react";
import HomeImg from "../assets/home.jpg";
import Name from "./Name";

export default function MainImage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Name />
      <Image
        src={HomeImg}
        alt="Picture of stagelights over a stage in the middle of load in"
        placeholder="blur"
        layout="fill"
      />
    </div>
  );
}
