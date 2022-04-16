import { useEffect, useState } from "react";
import "../styles/catalog.css";
import Product from "./product";
import DataService from "../services/service";
import ToDo from "./toDo";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  // CREAT LOAD DATA FUNCTION
  const loadData = async () => {
    console.log("component loaded");

    let service = new DataService();
    let data = await service.getCatalog();
    setProducts(data);
  };

  // WHEN THE COMPONENT LOADS
  useEffect(() => {
    loadData();
  }, []);
  //
  //
  // CREAT A A STATE VARIABLE (PRODUCTS)
  // SET DATA (FROM loadDdata) to the state variable
  //
  //
  return (
    // GET DATA HERE
    <div className="catalog">
      <h5>There are {products.length} products</h5>
      {console.log("component rendered")}

      <div className="productList main_grid">
        {products.map((p) => (
          <Product key={p._id} data={p}></Product>
        ))}
      </div>
      <ToDo />
    </div>
  );
};

export default Catalog;
