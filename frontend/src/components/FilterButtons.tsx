import React from "react";
import { IProducts } from "../interfaces/interfaces";

// 1. PROP INTERFACE
interface FilterButtonsProps {
  sendProp: (prop: IProducts[]) => void;
}

// 2. SEND DATA AS A PROP TO PARENT
const FilterButtons: React.FC<FilterButtonsProps> = ({ sendProp }) => {
  const handleFilterClick = (category: string) => {
    console.log(category, "CATEGORY");
    fetch(`/api/products/${category}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        sendProp(data);
      });
  };

  return (
    <>
      <div className="filtersDiv">
        <button onClick={() => handleFilterClick("Jumper")}>Knitwear</button>

        {/* Backend: Dress */}
        <button onClick={() => handleFilterClick("Dress")}>Dresses</button>

        {/* Backend: Jacket */}
        <button onClick={() => handleFilterClick("Jacket")}>Jackets</button>

        {/* Backend: Top */}
        <button onClick={() => handleFilterClick("Top")}>Tops</button>

        {/* Backend: Blazer */}
        <button onClick={() => handleFilterClick("Blazer")}>Blazers</button>

        {/* Backend: Sweatshirt */}
        <button onClick={() => handleFilterClick("Sweatshirt")}>
          Sweatshirts
        </button>

        {/* Backend: Jeans */}
        <button onClick={() => handleFilterClick("Jeans")}>Jeans</button>

        {/* Backend: Skirt */}
        <button onClick={() => handleFilterClick("Skirt")}>Skirts</button>

        {/* Backend: Trousers */}
        <button onClick={() => handleFilterClick("Trousers")}>Trousers</button>

        {/* Backend: Shorts */}
        <button onClick={() => handleFilterClick("Shorts")}>Shorts</button>

        {/* Backend: Swimwear */}
        <button onClick={() => handleFilterClick("Swimwear")}>Swimwear</button>

        {/* Backend: Sleepwear */}
        <button onClick={() => handleFilterClick("Sleepwear")}>
          Sleepwear
        </button>

        {/* Backend: Hats, Earring, Necklace, Ring, Bag, Shoes */}
        {/* MOVE TO AN OWN NAV-OPTION??? */}
        <button onClick={() => handleFilterClick("Blazer")}>Accessories</button>
      </div>
    </>
  );
};

export default FilterButtons;
