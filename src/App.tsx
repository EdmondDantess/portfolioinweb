import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Works from './works/Works';
import Remote from './remote/Remote';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import backGr from './assets/images/noiseBackground.jpg'

const App = () => {
    const appStyle = {
        backgroundImage: `url(${backGr})`,
    }

    return (
        <div className="App" >
            <div className="backgroundNoise" style={appStyle}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Remote/>
            <Contacts/>
            <Footer/>
            </div>
        </div>
    );
}

export default App;
