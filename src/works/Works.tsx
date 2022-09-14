import React from 'react';
import style from './Works.module.scss';
import Work from './work/Work';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import socNetImg from '../assets/images/socNetwork.jpg'
import todoImg from '../assets/images/todoImg.jpg'

const Works = () => {
    const socNet = {
        backgroundImage: `url(${socNetImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    const toDo = {
        backgroundImage: `url(${todoImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'MY WORKS'}/>
                <div className={style.myWorks}>
                    <Work title={'Social Network'}
                          style={socNet}
                          description={'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not '}/>
                    <Work title={'TodoList'}
                          style={toDo}
                          description={'when an unknodsddddddddddd sdgdssdggdsgdsgdsgsd dsgag  printer took a galley of type and scrambled it to make a type specimen book. It has survived not '}/>
                </div>
            </div>
        </div>
    );
};

export default Works;