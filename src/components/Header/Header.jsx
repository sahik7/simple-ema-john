import React from 'react';
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
            <a href="/shop">shop</a>
            <a href="/order">order</a>
            <a href="/inventory">inventory</a>
            <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;