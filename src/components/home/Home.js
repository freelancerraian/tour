import React from 'react';
import './Home.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/aboutUs">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/rating">Rating</a>
                <a href="/logIn">Log in</a>
            </nav>
        </div>
    );
};

export default Header;