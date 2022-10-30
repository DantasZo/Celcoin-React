import { useState } from "react";
import Product from "../Product";
import products from "../Product/Products";

export default function Register() {
    const [total, setTotal] = useState(0)

    return (
        <>

            <div className="register">
                <b>Total da compra:</b>
                R$<span>{total.toFixed(2).toString().replace(".", ",")}</span>
            </div>
            <div>
                {products.map((product, index) => {
                    const { name, icon, price } = product;
                    return (
                        <Product
                            name={name}
                            icon={icon}
                            price={price}
                            setTotal={setTotal}
                            total={total}
                            index={index}
                        />
                    )
                })}
            </div>

        </>
    )
}