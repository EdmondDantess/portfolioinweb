import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Remote = () => {
    return (
        <div className={style.RemoteBlock}>
            <div className={`${styleContainer.container} ${style.hireBlock}`}>
                <div className={style.text}>I am considering options for remote work</div>
                <div className={style.button}>Hire me</div>
            </div>
        </div>
    );
};

export default Remote;