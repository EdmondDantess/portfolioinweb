import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title title={'CONTACTS'}/>
                <form action="" className={style.formBlock}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'E-mail'}/>
                    <textarea className={style.textArea} placeholder={'Message'}/>
                    <button className={style.button}>
                        Send message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;