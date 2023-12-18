import React from "react";
import Header from "../components/Header";
import AccessoriesFilterButtons from "../components/AccessoriesFilterButtons";

function Accessories(): JSX.Element {
  return (
    <>
      <Header />
      <h1>Accessories</h1>
      <AccessoriesFilterButtons />
    </>
  );
}
export default Accessories;
