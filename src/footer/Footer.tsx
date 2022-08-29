import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>MAKSIM LAUROUSKI</h3>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h5 className={style.title}>©2022 ALL RIGHTS RESERVED</h5>
                </div>
            </div>
    );
};

export default Footer;