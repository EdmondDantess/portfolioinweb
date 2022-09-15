import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import avatarka from '../assets/images/avatar.png';

const Main = () => {
    const avatar = {
        backgroundImage: `url(${avatarka})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    Hi There I am
                    <h1 className="FullName">
                        <span className="fname">MAKSIM LAUROUSKI</span>
                    </h1>
                    Frontend Developer.
                </div>
                <div className={style.photo} style={avatar}></div>
            </div>
        </div>
    );
};

export default Main;