import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

const Remote = () => {
    const contackMeText = []
    for (let i=0; i<555; i++) {
        contackMeText.push(` CONTACT ME -`.toUpperCase())
    }
    let textContact = contackMeText.map( t => {
        return (
            <span>{t}</span>
        )
    })
    return (
        <div className={style.RemoteBlock}>
            <div className={`${styleContainer.container} ${style.hireBlock}`}>
                <Title title={'I am considering options for remote work'}/>
                <div className={style.button}>
                    {textContact}
                    {textContact}
                     </div>
            </div>
        </div>
    );
};

export default Remote;