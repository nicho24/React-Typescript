import React from "react";
import { Link } from "react-router-dom";

function Sidebar () {
    return (
        <div className="sidebar">
            <ul className="menu-list">
                <li>
                    <Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;