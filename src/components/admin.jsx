import "../styles/admin.css";
import { useState } from "react";

const Admin = () => {
  //
  // PRODUCTS
  //
  const [prod, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const prodChange = (e) => {
    let name = e.target.title;
    let value = e.target.value;

    let copy = { ...prod };
    copy[name] = value;
    setProduct(copy);
    // console.log("product changed", e.target.value);

    // let copy = { ...prod };
    // copy.title = e.target.value;
    // setProduct(copy);
  };
  const priceChange = (e) => {
    console.log("product Changed", e.target.value);

    let copy = { ...prod };
    copy.price = parseFloat(e.target.value);
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log("Button works", prod);
    let copy = [...allProducts];
    copy.push(prod);
    setAllProducts(copy);
    console.log(allProducts.map);
  };

  //
  // COUPONS
  //

  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const codeChange = (e) => {
    console.log("Code Changed", e.target.value);

    let copy = { ...coupon };
    copy.code = e.target.value;
    setCoupon(copy);
  };
  const discountChange = (e) => {
    console.log("discount Changed", e.target.value);

    let copy = { ...coupon };
    copy.discount = parseFloat(e.target.value);
    setCoupon(copy);
  };

  const saveCoupon = () => {
    console.log("Button works", coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
    console.log(allCoupons.map);
  };
  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <div className="admin-container">
        <div className="products">
          <h3>Register A New Product</h3>
          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={prodChange}
              ></input>
            </div>
            <div>
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                onChange={prodChange}
              ></input>
            </div>
            <div>
              <label className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                onChange={prodChange}
              ></input>
            </div>
            <div>
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={prodChange}
              ></input>
            </div>
            <div>
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                onChange={prodChange}
              ></input>
            </div>
            <button className="btn btn-dark" onClick={saveProduct}>
              Register
            </button>
          </div>
          <h4> Valid Coupons</h4>
          <ul>{/*map here*/}</ul>
          {allCoupons.map((c, index) => (
            <li key={index}>
              {c.code} - {c.discount}%
            </li>
          ))}
          <ul>{/*map here*/}</ul>
          <ul>{/*map here*/}</ul>
        </div>
        <div className="coupons">
          <h3>Register A New Coupon</h3>
          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input
                type="text"
                className="form-control"
                onChange={codeChange}
              ></input>
            </div>
            <div>
              <label className="form-label">Discount</label>
              <input
                type="number"
                className="form-control"
                onChange={discountChange}
              ></input>
            </div>
            <button className="btn btn-dark" onClick={saveCoupon}>
              Register
            </button>
          </div>
          <h4> Valid Coupons</h4>
          <ul>{/*map here*/}</ul>
          {allCoupons.map((c, index) => (
            <li key={index}>
              {c.code} - {c.discount}%
            </li>
          ))}
          <ul>{/*map here*/}</ul>
          <ul>{/*map here*/}</ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
