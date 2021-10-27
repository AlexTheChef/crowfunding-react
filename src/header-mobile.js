import React from 'react';
import './style.css';

function HeaderMobile(props) {
    return (
        <div className="header-mobile">
            <div className="header-mobile-img" />
            <div className={"burger js-burger" + (props.burger ? ' active' : '')} onClick={props.handleBurger}></div>
            <div className="navigation-mobile js-navigation" style={{ display: props.burger ? 'block' : 'none' }}>
                <a href="!#" alt=''>About</a>
                <a href="!#" alt=''>Discover</a>
                <a href="!#" alt=''>Get Started</a>
            </div>
        </div>
    );
}

export default HeaderMobile;