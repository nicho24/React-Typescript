import React, {useContext} from "react";
import CardContext from "./CardContext";

function Checkout () {
    const itemsContext = useContext(CardContext);
    if (!itemsContext) {
        // Render a fallback or return null
        return null;
      }
      const { items } = itemsContext;
      if (items.length === 0) {
        return <p>No items found</p>;
      }
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            { items.map((item, index)=> (
                <div key={index} className="checkout-item-list">
                    <div className="product-image">
                        <img src={item.image} alt=""/>
                    </div>
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                </div>
            ))
            }
        </div>
    )
}

export default Checkout;