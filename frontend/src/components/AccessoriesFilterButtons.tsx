import React, { useState } from "react";
import { IProducts } from "../interfaces/interfaces";

function AccessoriesFilterButtons(): JSX.Element {
  const [filterAccessories, setFilterAccessories] = useState<IProducts[]>([]);
  console.log(filterAccessories, "FILTERED PRODUCTS");

  const handleFilterClick = (category: string) => {
    console.log(category, "CATEGORY");
    fetch(`/api/accessories/${category}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        setFilterAccessories(data);
        console.log(data, "DATA");
      });
  };
  return (
    <>
      <div className="filtersDiv">
        {/* Backend: Hat, Ring, Bag, Shoes */}
        <button onClick={() => handleFilterClick("Hat")}>Hats</button>

        {/* Backend: Earring */}
        <button onClick={() => handleFilterClick("Earring")}>Earrings</button>

        {/* Backend: Necklace */}
        <button onClick={() => handleFilterClick("Necklace")}>Necklaces</button>

        {/* Backend: Ring */}
        <button onClick={() => handleFilterClick("Ring")}>Rings</button>

        {/* Backend: Bag */}
        <button onClick={() => handleFilterClick("Bag")}>Bags</button>

        {/* Backend: Shoes */}
        <button onClick={() => handleFilterClick("Shoes")}>Shoes</button>
      </div>
    </>
  );
}

export default AccessoriesFilterButtons;
