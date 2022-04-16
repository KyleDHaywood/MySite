import { useContext } from "react";
import storeContext from "../store/storeContext";
import "../styles/cart.css";
import CartCard from "./cartCard";

const Cart = () => {
  const { cart, user } = useContext(storeContext);
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="container">
        <div className="two">
          <h3>Your cart has {cart.length} items</h3>
          <div>
            {cart.map((prod) => (
              <CartCard key={prod._id} data={prod}></CartCard>
            ))}
          </div>
        </div>
        <div className="one">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tempore molestias maiores animi possimus! Sapiente ratione
            distinctio non temporibus? Soluta sed a dicta repudiandae quos
            repellendus nisi possimus vitae ducimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
