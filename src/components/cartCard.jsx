import "../styles/cartCard.css";
import { useContext } from "react";
import storeContext from "../store/storeContext";
import Product from "./product";

const CartCard = (props) => {
  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return "$" + total.toFixed(2);
  };

  const { removeProductFromCart } = useContext(storeContext);
  const removeFromCart = () => {
    removeProductFromCart(props.data._id);
  };

  // const prod = cart.prod;
  return (
    <div className="cartCard" key={props.data._id}>
      <div>
        <img src={"./img/" + props.data.image} alt="#" />
      </div>
      <div className="info">
        <h5>{props.data.title}</h5>
        <label>{props.data.category}</label>
      </div>
      <label className="price">{props.data.price} </label>
      <label className="quantity">{props.data.quantity}</label>
      <label className="total">{getTotal()}</label>
      <button className="btn btn-sm btn-danger" onClick={removeFromCart}>
        Remove Item
      </button>
    </div>
  );
};

export default CartCard;
