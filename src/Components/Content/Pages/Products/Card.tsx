import React, { useContext } from "react";
import CardContext from "./CardContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faShoppingCart);

interface ProductProps {
    name: string;
    price: number;
    image: string;
}
function Card({ name, price, image }: ProductProps) {
    const cartContext  = useContext(CardContext);
    if (!cartContext) {
        // Render a fallback or return null
        return null;
      }
      const { addToCart } = cartContext;
    return (
        <div className="card-list">
            <div className="card-list-inner">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div>
                <h3>{name}</h3>
                <div className="add-to-cart">
                    <span>{`$${price}`}</span>
                    <span className="cart-icon" onClick={()=> addToCart({name, price, image})}><FontAwesomeIcon icon="shopping-cart" /></span>
                </div>
            </div>
        </div>
    )
}

export default Card;