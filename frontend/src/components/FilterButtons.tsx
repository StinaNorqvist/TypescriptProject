import React, { useState } from "react";
import { IProducts } from "../interfaces/interfaces";

function FilterButtons(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  console.log(products, "PRODUCTS");

  const handleFilterClick = (category: string) => {
    console.log(category, "CATEGORY");
    fetch(`/api/products/${category}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setProducts(data);
        console.log(data, "DATA");
      });
  };
  return (
    <>
      <div className="filtersDiv">
        <button onClick={() => handleFilterClick("Jumper")}>Knitwear</button>

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
    </>
  );
}

export default FilterButtons;
