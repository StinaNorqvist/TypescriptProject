import React from "react";
import Header from "../components/Header";
// WRONG AGAIN
import HomeImage from "../assets/HomeImage.png";

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <img src={HomeImage} alt="HomeImage" />
      <img src="{require(../assets/HomeImage.png)}" alt="Gah" />
    </>
  );
}
export default Home;
