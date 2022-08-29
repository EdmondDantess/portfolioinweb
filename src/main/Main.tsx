import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h2>I am</h2>
                    <h1 className="FullName">
                        <span className="fname">MAKSIM</span>
                        <span className="lname"> LAUROUSKI</span>
                    </h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;