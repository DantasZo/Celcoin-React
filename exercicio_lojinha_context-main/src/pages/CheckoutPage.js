import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const {product} = useContext(CartContext)
  const {cart, setCart} = useContext(CartContext)
  
  useEffect(() =>{
    getTotalFromProducts()
    

  }, [])
  function getTotalFromProducts() {
    let soma = []
    product.forEach((product) =>{
      if(product.isSelect === true){
        soma.push(product.price)
        console.log(product)
      }
    } )
      soma.reduce((acc, current) => {
      return acc += current.price;
    }, 0)
   

  }
  //FIX ME 
  const Total = getTotalFromProducts()
  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      <div className="register">
        <b>Total da compra:</b> R$ <span>{Total}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}