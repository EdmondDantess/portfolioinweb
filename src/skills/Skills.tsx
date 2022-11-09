import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import iconCss from '../assets/images/skills/CSS.svg'
import iconJavascript from '../assets/images/skills/JavaScript.svg'
import iconTS from '../assets/images/skills/TypeScript.svg'
import iconHTML from '../assets/images/skills/HTML.svg'
import iconJEST from '../assets/images/skills/Jest.svg'
import iconMUI from '../assets/images/skills/MaterialUI-Dark.svg'
import iconGit from '../assets/images/skills/Git.svg'
import iconReact from '../assets/images/skills/React-Dark.svg'
import iconRedux from '../assets/images/skills/Redux.svg'
import iconStorybook from '../assets/images/skills/storybook.png'
import iconApi from '../assets/images/skills/icons8-api-96.png'
import iconAxios from '../assets/images/skills/axios.svg'

const Skills = () => {
    return (
        <div className={style.skillsBlock} id={'#skills'}>
            <hr/>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'SKILLS'}/>
                <div className={style.skills}>
                    <Skill title={'REACT'} skillIcon={iconReact}/>
                    <Skill title={'REDUX'} skillIcon={iconRedux}/>
                    <Skill title={'JAVASCRIPT'} skillIcon={iconJavascript}/>
                    <Skill title={'TYPESCRIPT'} skillIcon={iconTS}/>
                    <Skill title={'CSS'} skillIcon={iconCss}/>
                    <Skill title={'HTML'} skillIcon={iconHTML}/>
                    <Skill title={'MUI'} skillIcon={iconMUI}/>
                    <Skill title={'JEST'} skillIcon={iconJEST}/>
                    <Skill title={'STORYBOOK'} skillIcon={iconStorybook}/>
                    <Skill title={'GIT'} skillIcon={iconGit}/>
                    <Skill title={'API'} skillIcon={iconApi}/>
                    <Skill title={'AXIOS'} skillIcon={iconAxios}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;