import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { IProducts } from "../interfaces/interfaces";

function Item(): JSX.Element {
  const { id } = useParams();
  const [item, setItem] = useState<IProducts[]>([]);

  console.log(id, "PRODUCTID");

  useEffect(() => {
    fetch(`/api/products/clothing/${id}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setItem(data);
        console.log(data, "ALL PRODUCTS");
        console.log(item, "ITAM");
      });
  }, []);

  return (
    <>
      <Header />
      <h1>Item</h1>
    </>
  );
}
export default Item;
