import React from 'react';
import style from './Works.module.css';
import Work from './work/Work';
import styleContainer from '../common/styles/Container.module.css'

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.myWorks}>
                    <Work title={'Work1'} description={'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not '}/>
                    <Work title={'Work2'} description={'when an unknodsddddddddddd sdgdssdggdsgdsgdsgsd dsgag  printer took a galley of type and scrambled it to make a type specimen book. It has survived not '}/>
                </div>
            </div>
        </div>
    );
};

export default Works;