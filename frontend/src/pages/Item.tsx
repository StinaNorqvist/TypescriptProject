import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProducts } from "../interfaces/interfaces";
import "../style/item.scss";
import { useCart } from "../contexts/useCart";
import { Link } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IProducts | null>(null);
  const [category, setCategory] = useState<string>("");
  const [similarItems, setSimilarItems] = useState<IProducts[]>([]);
  console.log(category);
  const { addToCart } = useCart();

  //   2. CALL SHUFFLE ARRAY
  const fetchSimilar = async (category: string) => {
    try {
      const response = await fetch(`/api/products/${category}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: IProducts[] = await response.json();
      setSimilarItems(data);
    } catch (error) {
      console.error("Error fetching similar items:", error);
    }
  };

  //   1. CALL FETCH SIMILAR
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/products/clothing/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: IProducts = await response.json();
        setItem(data);
        setCategory(data.productcategory);
        await fetchSimilar(data.productcategory);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  //   3. SOURCE CHAT GPT. FUNCTION TO RANDOMIZE SIMILAR ITEMS
  function shuffleArray(similarItems: IProducts[]) {
    console.log(similarItems, "SIMILAR ITEMS");
    for (let i = similarItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [similarItems[i], similarItems[j]] = [similarItems[j], similarItems[i]];
    }
    return similarItems;
  }

  shuffleArray(similarItems);

  return (
    <>
      {item && (
        <div className="itemContainer">
          <div className="leftDiv">
            <img src={item.productimage} alt="Product Image" />
          </div>
          <ul className="rightDiv">
            <h2>{item.productname}</h2>
            <li className="rightLi">{item.productcondition} condition</li>
            <li className="rightLi">Size {item.productsize}</li>
            <li className="rightLi">{item.productprice} SEK</li>
            <button className="addToCart" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </ul>
        </div>
      )}
      <h1 className="similarH1">You might also like</h1>
      <div className="similarContainer">
        {shuffleArray(
          similarItems.filter((i) => i.productid !== item?.productid)
        )
          .slice(0, 5)
          .map((i) => (
            <div key={i.productid}>
              <Link
                className="link"
                to={`/item/${i.productid}`}
                key={i.productid}
              >
                <img src={i.productimage} alt="Product Image" />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};
export default Item;
