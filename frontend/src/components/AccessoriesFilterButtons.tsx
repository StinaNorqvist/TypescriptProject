import React, { useEffect, useState } from "react";
import { ICategories, IProducts } from "../interfaces/interfaces";

// 1. PROP INTERFACE
interface FilterButtonsProps {
  sendProp: (prop: IProducts[]) => void;
}

const AccessoriesFilterButtons: React.FC<FilterButtonsProps> = ({
  sendProp,
}) => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  // 2. SEND DATA AS A PROP TO PARENT
  const handleFilterClick = (category: string) => {
    console.log(category, "CATEGORY");
    fetch(`/api/accessories/${category}`)
      .then((response) => response.json())
      .then((data: IProducts[]) => {
        sendProp(data);
      });
  };

  //   FETCH ALL CATEGORIES TO MAP BUTTONS
  const fetchAllCategories = () => {
    fetch("/api/categories/accessories")
      .then((response) => response.json())
      .then((data: ICategories[]) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  console.log(categories, "CATEGORIES");

  return (
    <>
      <div className="filtersDiv">
        <button onClick={() => handleFilterClick("")}>All Accessories</button>

        {categories.map((c) => (
          <button
            id="filterButtons"
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

export default AccessoriesFilterButtons;
