import React from 'react';
import headerLogo from "../images/logo.png";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="site logo"/>
        </header>
    );
}

export default Header;