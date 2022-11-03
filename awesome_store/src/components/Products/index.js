import { useState, useEffect } from "react";
import axios from "axios";

import "./Products.css";
import Loading from "../../assets/loading.gif";
// import { productsList } from "./products";

import Product from "../Product";

function Products(props) {
  const [productsList, setProductsList] = useState(null);
  const { updateTotalPrice } = props;

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
    promise.then((response) => {
      setProductsList(response.data);
    });
    promise.catch(e => console.log("deu ruim! 😢", e));
  }, []);

  // async-await alternative
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
  //       setProductsList(response.data);
  //     } catch (e) {
  //       console.log("deu ruim! 😢", e)
  //     }
  //   }

  //   fetchData();
  // }, [])

  function buildProductsList() {
    if (productsList === null) return <img src={Loading} alt="carregando..." />
    if (productsList.length === 0) return <h1>Poxa, que peninha! Não há produtos cadastrados</h1>

    return productsList.map(product => {
      return (
        <Product
          key={product.title}
          title={product.title}
          description={product.description}
          price={product.price}
          updateTotalPrice={(price) => updateTotalPrice(price)}
        />
      )
    })
  }

  const products = buildProductsList();
  return (
    <div className="Products">
      {products}
    </div>
  )
}

export default Products;