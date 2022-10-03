import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

const Remote = () => {
    const contackMeText = []
    for (let i = 0; i < 555; i++) {
        contackMeText.push(` CONTACT ME -`.toUpperCase())
    }
    let textContact = contackMeText.map((t, index )=> {
        return (
            <span key={index}>{t}</span>
        )
    })
    return (
        <div className={style.RemoteBlock}>
            <div className={`${styleContainer.container} ${style.hireBlock}`}>
                <Title title={'I am considering options for remote work'}/>
                <div className={style.button}>
                    <a href="#">
                        {textContact}
                        {textContact}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Remote;