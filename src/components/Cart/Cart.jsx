import React, { useEffect, useState } from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = ({ cartItems, removeItem }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setCartTotal(total.toFixed(2));
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    removeItem(item);
  };

  return (
    <div className="cartContainer">
      <h1>Products in your cart</h1>
      {cartItems.map((item) => (
        <div className="cartItems" key={item.id}>
          <img src={item.img} alt="" />
          <div className="cartDetails">
            <p className="p1">{item.name}</p>
            <p className="p2">{item.desc}</p>
            <p className="p3">
              {item.quantity} x ${item.price}
            </p>
          </div>
          <div
            className="deleteIcon"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            <DeleteOutlineOutlinedIcon style={{ fontSize: "1.75rem" }} />
          </div>
        </div>
      ))}
      <div className="subTotal">
        <p className="p4">SUBTOTAL: </p>
        <p className="p5">${cartTotal}</p>
      </div>
      <div className="checkout">
        <h1>Proceed To Checkout</h1>
      </div>
    </div>
  );
};

export default Cart;
