import React from 'react';
import style from './Header.module.css';
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.fullName}><a href="https://cloud.mail.ru/public/NPDu/YeZcELvLg"
                                               style={{textDecoration: 'none'}}>MAKSIM LAUROUSKI CV</a>
                <hr/>
            </div>

            <Nav/>

        </div>
    );
};

export default Header;