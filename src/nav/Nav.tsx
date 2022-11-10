import React from 'react';
import style from './Nav.module.css';


const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
};

export default Nav;