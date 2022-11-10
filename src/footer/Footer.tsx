import React, {useEffect, useState} from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import iconGit from './../assets/images/contacts/github.png'
import iconLink from './../assets/images/contacts/linkedn.png'
import iconEmail from './../assets/images/contacts/email.png'
import iconTelegram from './../assets/images/contacts/telegram.png'
import {Fade} from 'react-awesome-reveal';


const Footer = () => {

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
        return ()=>{
            setShowWords('GOOD')
        }
    }, [])


    return (
        <div className={style.footerBlock} id={'contacts'}>
            <Fade direction={'right'}>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <Title title={'CONNECT WITH ME'}/>
                    <div className={style.icons}>
                        <a href="https://github.com/EdmondDantess" target={'_blank'} style={{backgroundColor: 'black'}}>
                            <div className={style.icon}>GITHUB</div>
                            <img src={iconGit} alt="" style={{backgroundColor: 'white', borderRadius: '50%'}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/maksimlaurouski/" target={'_blank'}>
                            <div className={style.icon}>LINKEDIN</div>
                            <img src={iconLink} alt=""/>
                        </a>
                        <a href="https://t.me/EdmondDan" target={'_blank'}>
                            <div className={style.icon}>TELEGRAM</div>
                            <img src={iconTelegram} alt=""/>
                        </a>
                    </div>
                    <a href="mailto:maximlavrovsky@mail.ru" target={'_blank'}
                       style={{textDecoration: 'none', width: '100%'}}>
                        <div className={style.Email}>SHOOT ME EMAIl <img src={iconEmail} alt=""/></div>
                    </a>
                    <p style={{
                        display:'flex',
                        justifyContent: 'space-around',
                        fontSize: '17px',
                        color: 'white',
                        fontFamily: 'bodyText',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '-10px'
                    }}>Have a {showWords} {today}</p>
                    <h5 className={style.title}>©2022 ALL RIGHTS RESERVED</h5>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;