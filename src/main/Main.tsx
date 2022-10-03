import React, {useEffect, useState} from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import avatarka from '../assets/images/avatar.png';

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
            let i = Math.trunc(+(Math.random().toFixed(2)) * 100)
            if (i > words.length - 1) {
                i = i - words.length
            }
            setShowWords(words[i])
        }, 6000)
    }, [])
    return (
        <div className={style.mainBlock}>
            <div className={style.classDispayFlex}>
                <div className={style.text}>
                    Hi There I am
                    <h1 className="FullName">
                        <span className="fname">MAKSIM LAUROUSKI</span>
                    </h1>
                    Front-End Developer.
                </div>
                <div className={style.photo} style={avatar}></div>
            </div>
            <div className={style.wordsGood}>
                <div>Have a</div>
                <div
                    className={style.colorW}>{showWords ? showWords : 'GOOD'}</div>{today}
            </div>
        </div>
    );
};

export default Main;