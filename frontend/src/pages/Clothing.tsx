import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/clothing.scss";
import FilterButtons from "../components/FilterButtons";
import { IProducts } from "../interfaces/interfaces";

function Clothing(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchAllProducts = () => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setProducts(data);
        console.log(data, "DATA");
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Header />
      <h1>Clothing</h1>

      <FilterButtons />

      <div className="productContainer">
        {products.map((p) => (
          <div className="productDiv" key={p.productid}>
            {/* <p>{p.productname}</p>
          <p>{p.productprice}</p> */}
            <div className="imageDiv">
              <img
                className="productImage"
                src={p.productimage}
                alt="Product Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Clothing;
