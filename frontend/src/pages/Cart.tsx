import { useCart } from "../contexts/useCart";
import "../style/cart.scss";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems, "CARTITEMS");

  return (
    <>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <ul key={index} className="cartContainer">
          <div className="imageContainer">
            <img
              className="cartImage"
              src={item.productimage}
              alt="Item 
          Image"
            />
          </div>
          <div className="infoContainer">
            <li className="cartInfo">{item.productname}</li>
            <li className="cartInfo">{item.productprice} SEK</li>
          </div>
        </ul>
      ))}
      <h1>Products: </h1>
      <h1>Total: </h1>
      <button>Checkout</button>
    </>
  );
};
export default Cart;
