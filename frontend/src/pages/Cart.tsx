import { useCart } from "../contexts/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems, "CARTITEMS");

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>Item name: {item.productname}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cart;
