import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

const Remote = () => {
    return (
        <div className={style.RemoteBlock}>
            <div className={`${styleContainer.container} ${style.hireBlock}`}>
                <Title title={'I am considering options for remote work'}/>
                <div className={style.button}>Hire me</div>
            </div>
        </div>
    );
};

export default Remote;