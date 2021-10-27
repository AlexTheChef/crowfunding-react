import React from 'react';
import '../../style/style.css';

function Header(props) {
    return (
        <div className='header'>
            <div className='header-mobile-img' src="images/logo.svg" />
            <div className="navigation">
                <a href="!#" alt=''>About</a>
                <a href="!#" alt=''>Discover</a>
                <a href="!#" alt=''>Get Started</a>
            </div>
        </div>
    );
}

export default Header;