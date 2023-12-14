import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/clothing.scss";

interface IProducts {
  productid: number;
  productname: string;
  productprice: number;
  productimage: string;
  productsize: string;
  productcondition: string;
  productcategory: string;
}

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

      {/* Backend: Jumper */}
      <div className="filtersDiv">
        <button>Knitwear</button>

        {/* Backend: Jacket */}
        <button>Jackets</button>

        {/* Backend: Tops */}
        <button>Tops</button>

        {/* Backend: Blazer */}
        <button>Blazers</button>

        {/* Backend: Sweatshirt */}
        <button>Sweatshirts</button>

        {/* Backend: Jeans */}
        <button>Jeans</button>

        {/* Backend: Skirt */}
        <button>Skirts</button>

        {/* Backend: Trousers */}
        <button>Trousers</button>

        {/* Backend: Shorts */}
        <button>Shorts</button>

        {/* Backend: Swimwear */}
        <button>Swimwear</button>

        {/* Backend: Sleepwear */}
        <button>Sleepwear</button>

        {/* Backend: Hats, Earring, Necklace, Ring, Bag, Shoes */}
        {/* MOVE TO AN OWN NAV-OPTION??? */}
        <button>Accessories</button>
      </div>

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
