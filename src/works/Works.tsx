import React, {useState} from 'react';
import style from './Works.module.scss';
import Work from './work/Work';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import socNetImg from '../assets/images/screensApp/socnet.png'
import todoImg from '../assets/images/screensApp/todo.png'
import counterImg from '../assets/images/screensApp/counter.png'
import learnPackImg from '../assets/images/screensApp/learnPack.png'
import './arrows.css'
import {Fade} from 'react-awesome-reveal';

const socNet = {
    backgroundImage: `url(${socNetImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const toDo = {
    backgroundImage: `url(${todoImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const cards = {
    backgroundImage: `url(${learnPackImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const counter = {
    backgroundImage: `url(${counterImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const workSocNet = {
    title: 'Social Network',
    description: 'SPA for social actions. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.',
    linkGit: 'https://github.com/EdmondDantess/samurai-way',
    linkSite: '',
    img: socNet
}
const workTodo = {
    title: 'Todolist',
    description: 'SPA for task management. Implemented: add task or task list, remove task or task list, rename task or task list, marking the completed task',
    linkGit: 'https://github.com/EdmondDantess/ToDoLists',
    linkSite: '',
    img: toDo,
}
const workCards = {
    title: 'Learning Cards',
    description: 'SPA for learning by cards. It\'s internship project. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.',
    linkGit: 'https://github.com/EdmondDantess/project_friday',
    linkSite: '',
    img: cards,
}
const workCounter = {
    title: 'Counter',
    description: 'It\'s just SPA counter Implemented on Redux. localstorage is used by the Den Abramov method',
    linkGit: 'https://github.com/EdmondDantess/Counter',
    linkSite: '',
    img: counter,
}

const Works = () => {

    const myWorks = [workCards, workTodo, workSocNet, workCounter]

    const [curVal, setCurValue] = useState(0)
    const nextWork = () => {
        curVal >= myWorks.length - 1 ? setCurValue(0) : setCurValue(curVal + 1)
    }
    const prevWork = () => {
        curVal <= 0 ? setCurValue(myWorks.length - 1)
            : setCurValue(curVal - 1)
    }

    const countSlides = myWorks.map((w, index) => {
        return <div key={index} style={{
            height: '20px', width: '20px',
            border: '3px solid #ce8133',
            borderRadius: '50%',
            backgroundColor: curVal === index ? '#505b46' : 'white', marginLeft: '5px',
            cursor: 'pointer'
        }}
                    onClick={() => setCurValue(index)}
        >

        </div>
    })

    return (
        <div className={style.worksBlock} id={'projects'}>

            <div style={myWorks[curVal].img ?myWorks[curVal].img :{backgroundColor: 'black'}} className={style.backDivBlur}>
                <div className={`${styleContainer.container} ${style.worksContainer}`}>
                    <Title title={'MY WORKS'}/> <Fade direction={'left'}>
                    <div style={{display: 'flex'}}>  {countSlides}</div>

                    <div className={style.myWorks}>
                        <div className={style.Arrow} onClick={prevWork}>
                            <svg className="strelka-left-2" viewBox="0 0 9 14">
                                <path className="svg-strelka"
                                      d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"></path>
                            </svg>
                        </div>
                        <Work title={myWorks[curVal].title}
                              style={myWorks[curVal].img}
                              description={myWorks[curVal].description}
                              gitLink={myWorks[curVal].linkGit}
                        />
                        <div className={style.Arrow} onClick={nextWork}>
                            <svg className="strelka-right-2" viewBox="0 0 9 14">
                                <path className="svg-strelka"
                                      d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"></path>
                            </svg>
                        </div>
                    </div>
                </Fade></div>
            </div>

        </div>
    );
};

export default Works;