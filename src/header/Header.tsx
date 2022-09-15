import React from 'react';
import style from './Header.module.css';
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.fullName}>MAKSIM LAUROUSKI <hr/></div>

            <Nav/>
        </div>
    );
};

export default Header;