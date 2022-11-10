import React from 'react';
import style from './Nav.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link   to="home" offset={-50} duration={500}  smooth={true} >Home</Link>
            <Link   to="skills" offset={-50} duration={500}  smooth={true}>Skills</Link>
            <Link to="projects" offset={-50} duration={500} smooth={true} >Projects</Link>
            <Link  to="contacts" offset={1} duration={500}  smooth={true}>Contacts</Link>
        </div>
    );
};

export default Nav;