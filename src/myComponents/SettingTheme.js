import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const SettingTheme = () => {


    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    const [checkType, setCheckType] = useState(darkMode);

    const handleCheckType = () => {
        if (checkType === false) {
            setCheckType(true);
            localStorage.setItem('isDarkMode', true);
            window.location.reload();
        }

        else {
            setCheckType(false);
            localStorage.setItem('isDarkMode', false);
            window.location.reload();
        }

    }

    useEffect(()=>{
        if(darkMode){
            document.getElementsByTagName('html')[0].style.backgroundColor = '#202124';
        }
        else{
            document.getElementsByTagName('html')[0].style.backgroundColor = 'white';
        }
    });

    useEffect(()=>{
        if(darkMode){
            document.getElementsByTagName('body')[0].style.backgroundColor = '#202124';
        }
        else{
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        }
    });






    return (
        <>
            <Helmet>
                <title>
                    Quite Quote - Change Theme
                </title>
            </Helmet>
            <main style={{ height: '100vh', backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div id="main-content" >
                    <div className="theme-page-main-content">
                        <div className="settings-pages-heading" style={{ color: darkMode ? 'white' : 'black' }}>
                            <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            </Link>
                            <h1>Change Theme</h1>
                        </div>
                        <div className="theme-page-container">
                            <div className="theme-option">
                                <div className="theme-option-content" style={{ color: darkMode ? 'white' : 'black' }}>
                                    <h3>Change Theme Mode</h3>
                                    <p>toogle to change theme</p>
                                </div>
                                <div className="dark-mode-switch-container">
                                    <label className="switch">
                                        <input type="checkbox" onClick={handleCheckType} checked={checkType} />
                                        <span className="slider round"></span>
                                    </label>
                                    <p id='darkmode-detect-para' style={{color: darkMode?'white':'black'}}>{darkMode? 'Darkmode enabled': 'Darkmode disabled'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
