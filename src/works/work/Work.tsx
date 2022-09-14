import React from 'react';
import style from './Work.module.scss';

type WorkPropsType = {
    title: string
    description: string
    style: any
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.imgWork} style={props.style}>
                <div className={style.buttonWatch}>Watch</div>
            </div>
            <div className={`${style.footerBlock}`}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Work;