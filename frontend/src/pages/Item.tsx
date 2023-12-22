import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { IProducts } from "../interfaces/interfaces";

function Item(): JSX.Element {
  const { id } = useParams();
  const [item, setItem] = useState<IProducts | null>(null);

  useEffect(() => {
    fetch(`/api/products/clothing/${id}`)
      .then((response) => response.json())
      .then((data: IProducts) => {
        setItem(data);
      });
  }, [id]);

  return (
    <>
      <Header />
      {item && (
        <div>
          <h1>{item.productname}</h1>
          <img
            className="productImage"
            src={item.productimage}
            alt="Product Image"
          />
          <h2>Condition: {item.productcondition}</h2>
          <h2>{item.productcategory}</h2>
          <h2>{item.productprice} SEK</h2>
          <h2>Size {item.productsize}</h2>
        </div>
      )}
    </>
  );
}
export default Item;
