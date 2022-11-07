import { useContext } from "react";

import Header from "../../Header";
import Products from "../../Products";
import CashRegister from "../../CashRegister";
import ShoppingContext from "../../../contexts/CartContext";

export default function ProductsPage() {

  const { cart } = useContext(ShoppingContext);

  function getTotalFromProducts() {
    return cart.reduce((acc, current) => {
      return acc += current.price;
    }, 0)
  }

  return (
    <main>
      <Header />
      <Products />
      <CashRegister total={getTotalFromProducts()} />
    </main>
  )
}