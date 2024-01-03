import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/clothing.scss";
import FilterButtons from "../components/FilterButtons";
import { IProducts } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Clothing(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filterProducts, setFilterProducts] = useState<IProducts[]>([]);
  const { addToCart } = useCart();

  // 4. SAY WHAT TO DO WITH THE RECIEVED PROP
  const receiveProp = (receivedProp: IProducts[]) => {
    setFilterProducts(receivedProp);
  };

  // FETCH ALL PRODUCTS WHEN PAGE RENDERS
  const fetchAllProducts = () => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setProducts(data);
        console.log(data, "ALL PRODUCTS");
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Header />
      <h1>Clothing</h1>

      {/* 3. RECIEVE PROP AND NAME FUNCTION TO RECIEVEPROP THAT WILL HANDLE PROP */}
      <FilterButtons sendProp={receiveProp} />

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
              <button onClick={() => addToCart(p.productid)}>
                Add to Cart
              </button>
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
                  {/* <img
                    className="productImage"
                    src={p.productimage}
                    alt="Product Image"
                  /> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Clothing;
