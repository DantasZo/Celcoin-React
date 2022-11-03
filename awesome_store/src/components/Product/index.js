import { useState } from "react";
import "./Product.css";

function Product(props) {
  const [selected, setSelected] = useState(false);
  const { title, description, price, updateTotalPrice } = props;

  function handleSelect() {
    const isSelected = !selected;
    if (isSelected) updateTotalPrice(price);
    else updateTotalPrice(price * -1)

    setSelected(isSelected)
  }

  // let classes = ["product"];
  // if (selected) {
  //   classes.push("selected");
  // }

  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }

  return (
    <div className="Product">
      <div className={checkSelected()} onClick={handleSelect}>
        <img src="https://via.placeholder.com/150" alt="Awesome Product" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Product;