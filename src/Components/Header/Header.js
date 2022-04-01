import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>Welcome To Tshirt Mania!!</h2>
            <nav >
            <Link to="/">Home</Link>
            <Link to="/orderriviw">Order Riview</Link>
           
            <Link to="/grandpa">Grandpa</Link>
           
            </nav>
        </div>
    );
};

export default Header;