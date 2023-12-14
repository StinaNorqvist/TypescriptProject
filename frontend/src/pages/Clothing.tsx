import React, { useEffect } from "react";
import Header from "../components/Header";

// interface IProducts {
//   productId: number;
//   productName: string;
//   productPrice: number;
//   productImage: string;
//   productSize: string;
//   productCondition: string;
//   productCategory: string;
// }

function Clothing(): JSX.Element {
  // const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {});

  return (
    <>
      <Header />
      <h1>Clothing</h1>
    </>
  );
}
export default Clothing;
