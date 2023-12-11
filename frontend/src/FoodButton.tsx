import { useState } from "react";
import "./App.css";
import React from "react";

function FoodButton(): JSX.Element {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={increaseCount}>Food: {count}</button>
    </>
  );
}
export default FoodButton;
