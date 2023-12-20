import React, { useEffect, useState } from "react";
import { ICategories, IProducts } from "../interfaces/interfaces";

// 1. PROP INTERFACE
interface FilterButtonsProps {
  sendProp: (prop: IProducts[]) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ sendProp }) => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  // 2. SEND DATA AS A PROP TO PARENT
  const handleFilterClick = (category: string) => {
    console.log(category, "CATEGORY");
    fetch(`/api/products/${category}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        sendProp(data);
      });
  };

  //   FETCH ALL CATEGORIES TO MAP BUTTONS
  const fetchAllCategories = () => {
    fetch("/api/categories/clothes")
      .then((response) => response.json())
      .then((data: ICategories[]) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      <div className="filtersDiv">
        <button onClick={() => handleFilterClick("")}>All clothing</button>

        {categories.map((c) => (
          <button
            key={c.categoryid}
            onClick={() => handleFilterClick(c.category)}
          >
            {c.category}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterButtons;
