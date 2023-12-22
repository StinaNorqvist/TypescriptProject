import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AccessoriesFilterButtons from "../components/AccessoriesFilterButtons";
import { IProducts } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

function Accessories(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filterProducts, setFilterProducts] = useState<IProducts[]>([]);

  // 4. SAY WHAT TO DO WITH THE RECIEVED PROP
  const receiveProp = (receivedProp: IProducts[]) => {
    setFilterProducts(receivedProp);
  };

  // FETCH ALL PRODUCTS WHEN PAGE RENDERS
  const fetchAllAccessories = () => {
    fetch("/api/accessories")
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setProducts(data);
        console.log(data, "ALL PRODUCTS");
      });
  };

  useEffect(() => {
    fetchAllAccessories();
  }, []);

  console.log(filterProducts, "FILTER PRODUCTS");
  return (
    <>
      <Header />
      <h1>Accessories</h1>
      <AccessoriesFilterButtons sendProp={receiveProp} />

      {filterProducts.length > 0 ? (
        <div className="productContainer">
          {filterProducts.map((p) => (
            <div className="productDiv" key={p.productid}>
              <Link
                className="link"
                to={`/item/${p.productid}`}
                key={p.productid}
              >
                <div className="imageDiv">
                  <img
                    className="productImage"
                    src={p.productimage}
                    alt="Product Image"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="productContainer">
          {products.map((p) => (
            <div className="productDiv" key={p.productid}>
              <Link
                className="link"
                to={`/item/${p.productid}`}
                key={p.productid}
              >
                <div className="imageDiv">
                  <img
                    className="productImage"
                    src={p.productimage}
                    alt="Product Image"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Accessories;
