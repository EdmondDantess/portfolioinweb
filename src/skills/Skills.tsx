import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
             <Title title={'SKILLS'}/>
                <div className={style.skills}>
                    <Skill title={'Js/Ts'}
                           description={'Lorem dddddddddd dddddddddddddddddddd dddddddd dddddddd dddddddddIpsum has been the industry\'s standard dummy text ever since the 1500s, '}/>
                    <Skill title={'Css'}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                    <Skill title={'React'}
                           description={'when an unknown printer took a galley of type and scrambled it to make a type specimen '}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;