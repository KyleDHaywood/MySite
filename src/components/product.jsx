import "../styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import storeContext from "../store/storeContext";

const Product = (props) => {
  const addToCart = () => {
    console.log("added to cart", props.data.title);
    let prodToCart = {
      ...props.data,
      quantity: quantity,
    };
    addProductToCart(prodToCart);
  };

  // const removeFromCart = () => {
  //   console.log("removed to cart", props.data.title);
  //   removeProductFromCart(props.data._id);
  // };

  const addProductToCart = useContext(storeContext).addProductToCart;

  const [quantity, setQuantity] = useState(1);
  const onQuantityChange = (value) => {
    console.log("qnty changed", value);
    setQuantity(value);
  };
  const getTotal = () => {
    let total = quantity * props.data.price;
    return `$${total.toFixed(2)}`;
  };
  return (
    <div className="productCard product">
      <img className="imgCircle" src={"./img/" + props.data.image} alt=""></img>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>{props.data.price.toFixed(2)}</p>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <label>Total Price: {getTotal()}</label>
      <button className="btn btn-sm btn-primary" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

//
//
//
export default Product;
