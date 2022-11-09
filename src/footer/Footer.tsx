import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import iconGit from './../assets/images/contacts/github.png'
import iconLink from './../assets/images/contacts/linkedn.png'
import iconEmail from './../assets/images/contacts/email.png'
import iconTelegram from './../assets/images/contacts/telegram.png'


const Footer = () => {
    return (
        <div className={style.footerBlock} id={'#contacts'}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'CONNECT WITH ME'}/>
                <div className={style.icons}>
                    <a href="https://github.com/EdmondDantess" target={'_blank'} style={{backgroundColor: 'black'}}>
                        <div className={style.icon}>GITHUB</div><img src={iconGit} alt="" style={{backgroundColor: 'white', borderRadius: '50%'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/maksimlaurouski/" target={'_blank'}>
                        <div className={style.icon}>LINKEDIN</div><img src={iconLink} alt=""/>
                    </a>
                    <a href="https://t.me/EdmondDan" target={'_blank'}>
                        <div className={style.icon}>TELEGRAM</div><img src={iconTelegram} alt=""/>
                    </a>
                </div>
                <a href="mailto:maximlavrovsky@mail.ru" target={'_blank'}
                   style={{textDecoration: 'none', width: '100%'}}>
                    <div className={style.Email}>SHOOT ME EMAIl <img src={iconEmail} alt=""/></div>
                </a>
                <h5 className={style.title}>©2022 ALL RIGHTS RESERVED</h5>
            </div>

        </div>
    );
};

export default Footer;