import { useState } from "react";
import "../styles/quantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    console.log("Plus clicked");
    let value = quantity + 1;
    setQuantity(value);
    props.onChange(value); //calls the fn from the parent
  };
  const handleDecrease = () => {
    console.log("Minus clicked");
    let value = quantity - 1;
    if (value > 0) {
      setQuantity(value);
      props.onChange(value); //calls the fn from the parent
    }
  };

  return (
    <div className="quantityPicker">
      <button
        className="btn btn-sm btn-info"
        id="btnDecrease"
        onClick={handleDecrease}
        disabled={quantity === 1}
      >
        -
      </button>
      <div id="quanityIndicator">{quantity}</div>
      <button
        className="btn btn-sm btn-info"
        id="btnIncrease"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
