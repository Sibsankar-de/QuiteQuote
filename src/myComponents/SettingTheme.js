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
                            <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
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
                                    <label class="switch">
                                        <input type="checkbox" onClick={handleCheckType} checked={checkType} />
                                        <span class="slider round"></span>
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
