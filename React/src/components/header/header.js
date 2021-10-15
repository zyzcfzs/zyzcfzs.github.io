import React from 'react';
import "./header.css";
const Header = ({title}) => {
    return (
        <header>
            <h2>
                <i className='fab fa-free-code-camp'></i> {title}
            </h2>
            <button>
                <i className='fas fa-expand-arrows-alt'></i>
            </button>
        </header>
    );
};

export default Header;
