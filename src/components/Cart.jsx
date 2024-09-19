import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./cart.css";

function Cart() {
  const { cart, handleRemove } = useContext(ProductContext);
  const [currentNumber, setCurrentNumber] = useState(1);
  const cartPrice = 0;
  {
    console.log(cart);
  }
  const handlePay = () => {
    alert("Payment integration will be done");
  };
  return (
    <>
      {cart.length > 0 && (
        <>
          <h1 className="topH1">Cart</h1>
          <hr />
        </>
      )}
      <div className="mainCart">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={item.id} className="cart">
              <img src={item.images[0]} alt="" />
              <h1>{item.title}</h1>
              <h2>${Math.floor(item.price)}</h2>
              <button onClick={handleRemove} id={index} className="remove">
                Remove
              </button>
            </div>
          ))
        ) : (
          <h1 className="errorCart">No items Added in CART</h1>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout">
          <h1>Cart Total</h1>
          <div>
            <h4>Cart Subtotal</h4>
            <h4>
              ${Math.floor(cart?.reduce((acc, item) => acc + item.price, 0))}
            </h4>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <h4>$5</h4>
          </div>
          <div>
            <h4>Cart Total</h4>
            <h4>
              $
              {cart?.reduce((acc, item) => acc + Math.floor(item.price), 0) + 5}
            </h4>
          </div>
          <button onClick={handlePay}>Proceed to pay</button>
        </div>
      )}
    </>
  );
}

export default Cart;
