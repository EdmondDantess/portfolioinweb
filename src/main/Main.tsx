import React from 'react';
import style from './Main.module.scss';
import avatarka from '../assets/images/avatar.png';
import {Fade} from 'react-awesome-reveal';

const Main = () => {
    const avatar = {
        backgroundImage: `url(${avatarka})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }


    return (
        <div className={style.mainBlock} id={'home'}>

            <div className={style.classDispayFlex}>
                <Fade direction={'left'}>
                    <div className={style.text}>
                        Hi There I am
                        <h1 className="FullName">
                            <span className="fname">MAKSIM LAUROUSKI</span>
                        </h1>
                        Front End Developer.

                    </div>
                </Fade>
                <Fade direction={'right'}>
                    <div className={style.photo} style={avatar}>
                    </div>
                </Fade>


            </div>
            <Fade direction={'up'}>
                <div className={style.descriptMain}> Enthusiastic frontend
                    developer with
                    experience in creating SPA using React, Redux, TypeScript. Now I'm improving my skills in this
                    direction and plan to expand them with new
                    technologies.
                    Open to your suggestions.
                    Based in Belarus
                </div>
            </Fade>
        </div>
    );
};

export default Main;