import React, { useContext } from "react";
import logo from "../../logo.svg";
import CardContext from "../Content/Pages/Products/CardContext";
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faShoppingCart);

function Header () {

    const cardContext = useContext(CardContext);
    if (!cardContext) {
        // Render a fallback or return null
        return null;
      }
      const { items } = cardContext;
    return (
        <div className="header">
            <div className="header-wrapper">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo" />
                    <span>Typescript</span>
                </a>
                
                <Link to="/checkout" className="checkout-cart">
                    <FontAwesomeIcon icon="shopping-cart" />
                    {items.length}
                </Link>
            </div>
        </div>
    )
}

export default Header;