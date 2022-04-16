import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";
import { FaBell, FaDiceD6 } from "react-icons/fa";
import Weather from "./weather";

const NavBar = () => {
  const { cart, user } = useContext(storeContext);
  return (
    <nav className="navbar bg-dark text-white">
      <div className="bell">
        <Link className="news text-info" to="/coupons">
          <FaBell></FaBell>
        </Link>
      </div>
      <Weather></Weather>

      <div className="about" id="navbarSupportedContent">
        <Link className="aboutSign text-info" to="/about">
          Heavy Industries Wargaming
        </Link>
      </div>

      <div className="diceAndCart">
        <Link className="diceIcon text-info" to="/catalog">
          <FaDiceD6></FaDiceD6>
        </Link>

        <form className="viewCart">
          <Link
            to="/cart"
            className="btn btn-primary position-relative bg-info text-dark"
          >
            View Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">items</span>
            </span>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
