import React from 'react';
import style from './Work.module.scss';

type WorkPropsType = {
    title: string
    description: string
    gitLink: string
    style: any
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.imgWork} style={props.style}>

            </div>
            <div className={`${style.footerBlock}`}>
                <h3 className={style.title}>{props.title}</h3>
                <hr/>
                <p className={style.description}>{props.description}</p>
                <a href={props.gitLink} style={{textDecoration: 'none'}} target={'_blank'}>
                    <div className={style.buttonWatch}>
                        Watch
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Work;