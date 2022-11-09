import React from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    title: string
    skillIcon: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.skillIcon} alt="Skill icon"/>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;