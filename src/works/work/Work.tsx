import React from 'react';
import style from './Work.module.css';

type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.imgWork}>
                <div className={style.buttonWatch}>Watch</div>
            </div>
            <div className={`${style.footerBlock}`}>
                <p className={style.title}>{props.title}</p>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Work;