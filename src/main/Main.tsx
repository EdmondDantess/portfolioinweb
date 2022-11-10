import React, {useEffect, useState} from 'react';
import style from './Main.module.scss';
import avatarka from '../assets/images/avatar.png';
import {Fade} from 'react-awesome-reveal';

const Main = () => {
    const avatar = {
        backgroundImage: `url(${avatarka})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }

    const words = [
        'excellent',
        'exceptional',
        'favorable',
        'great',
        'marvelous',
        'positive',
        'satisfying',
        'superb',
        'valuable',
        'wonderful',
        'ace',
        'boss',
        'capital',
        'choice',
        'crack',
        'nice',
        'pleasing',
        'prime',
        'rad',
        'sound',
        'spanking',
        'sterling',
        'super',
        'superior',
        'welcome',
        'admirable',
        'agreeable',
        'commendable',
        'congenial',
        'deluxe',
        'first-class',
        'first-rate',
        'gnarly',
        'gratifying',
        'honorable',
        'jake',
        'neat',
        'precious',
        'recherché',
        'reputable',
        'select',
        'shipshape',
        'splendid',
        'stupendous',
        'tiptop',
        'up to snuff',
    ]
    const [showWords, setShowWords] = useState<string>('GOOD')
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = days[new Date().getDay()]

    useEffect(() => {
        setInterval(() => {
            let i = Math.floor(Math.random() * words.length)
            setShowWords(words[i])
        }, 6000)
    }, [])
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