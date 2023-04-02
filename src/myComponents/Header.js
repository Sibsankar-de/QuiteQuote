import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom'

function Header() {
    const homeRef = useRef(null);
    const settingsRef = useRef(null);
    const disRef = useRef(null);
    const [homePath, setHomepath] = useState(true);
    const [settingsPath, setSettingspath] = useState(true);
    const [discoverPath, setDiscoverpath] = useState(true);

    useEffect(() => {
        homeRef.current.className === 'active' ? setHomepath(false) : setHomepath(true);
    }, [homeRef]);
    useEffect(() => {
        settingsRef.current.className === 'active' ? setSettingspath(false) : setSettingspath(true);
    }, [settingsPath]);
    useEffect(() => {
        disRef.current.className === 'active' ? setDiscoverpath(false) : setDiscoverpath(true);
    }, [discoverPath]);


    const homeClick = () => {
        if (homePath) {
            setHomepath(!homePath);
            setSettingspath(true);
            setDiscoverpath(true);
        }
    }
    const infoClick = () => {
        if (settingsPath) {
            setSettingspath(!settingsPath);
            setDiscoverpath(true);
            setHomepath(true);
        }
    }
    const discoverClick = () => {
        if (discoverPath) {
            setDiscoverpath(!discoverPath);
            setHomepath(true);
            setSettingspath(true);
        }
    }

    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <>
            <header>
                <nav className="navbar" style={{backgroundColor: darkMode?'#2b2c2f':'#ebedf0', borderBottomColor: darkMode?'#3c3939':'#c6c5c5'}}>
                    <div className="logo-box">
                    </div>
                    <ul>
                        <li><NavLink to="/home" ref={homeRef} onClick={homeClick}><button id="home" ><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16" style={{color: darkMode?'white':'black'}}>
                            <path
                                d={homePath ? "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" :
                                    "M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"}
                            />
                        </svg></button></NavLink>
                        </li>

                        <li><NavLink to="discover" ref={disRef} onClick={discoverClick}><button id="discover"><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className={discoverPath ? "bi bi-compass" : "bi bi-compass-fill"} viewBox="0 0 16 16" style={{color: darkMode?'white':'black'}}>
                            <path
                                d={discoverPath ? "M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :
                                    "M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"} />
                            <path d={discoverPath ? "m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" : ''} />
                        </svg></button></NavLink></li>

                        <li><NavLink to="settings" ref={settingsRef} onClick={infoClick}><button id="i-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16" style={{color: darkMode?'white':'black'}}>
                            <path d={settingsPath ? "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z": undefined} />
                            <path d={settingsPath ? "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" :
                                "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"} />
                        </svg></button></NavLink></li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export default Header;