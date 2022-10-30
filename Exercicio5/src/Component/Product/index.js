import { useState } from "react";
import styles from "./Product.module.css";


export default function Product(props) {
    const { name, icon, price, setTotal, total } = props;
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");
    const [selected, setSelected] = useState(0)

    function PrintTotal() {
        if (!selected) {
            setSelected(true)
            setTotal(total + price)
        }
        else {
            setSelected(false)
            setTotal(total - price)
        }
    }
    return (
        <>

            {selected ? <div className="product selected" onClick={() => PrintTotal()}>
                {icon} {name} - R$ {adjustedPrice}
            </div> : <div className="product" onClick={() => PrintTotal()}>
                {icon} {name} - R$ {adjustedPrice}
            </div>}

        </>
    );
}