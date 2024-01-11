import { useCart } from "../contexts/useCart";
import "../style/cart.scss";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems, "CARTITEMS");
  const { removeFromCart } = useCart();

  const totalSum = cartItems.reduce((acc, item) => acc + item.productprice, 0);

  return (
    <>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <>
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
                <button id="removeButton" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </ul>
          ))}
          <div id="checkoutDiv">
            <h1>Products: {cartItems.length}</h1>
            <h1>Total: {totalSum} SEK</h1>
            <button id="checkoutButton">Checkout</button>
          </div>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </>
  );
};
export default Cart;
