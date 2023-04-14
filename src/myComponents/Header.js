import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom'

function Header() {
    const homeRef = useRef(null);
    const searchRef = useRef(null);
    const settingsRef = useRef(null);
    const disRef = useRef(null);
    const [homePath, setHomepath] = useState(true);
    const [searchPath, setSearchpath] = useState(true);
    const [settingsPath, setSettingspath] = useState(true);
    const [discoverPath, setDiscoverpath] = useState(true);

    useEffect(() => {
        homeRef.current.className === 'active' ? setHomepath(false) : setHomepath(true);
    }, [homeRef]);
    useEffect(() => {
        searchRef.current.className === 'active' ? setSearchpath(false) : setSearchpath(true);
    }, [searchPath]);
    useEffect(() => {
        settingsRef.current.className === 'active' ? setSettingspath(false) : setSettingspath(true);
    }, [settingsPath]);
    useEffect(() => {
        disRef.current.className === 'active' ? setDiscoverpath(false) : setDiscoverpath(true);
    }, [discoverPath]);
    useEffect(()=>{
        if (searchRef.current.className === 'active'){
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
            window.scrollTo(0,0);
        }
        else{
            document.getElementsByTagName('body')[0].style.overflow = 'scroll'
        }
    })

    const homeClick = () => {
        if (homePath) {
            setHomepath(!homePath);
            setSearchpath(true);
            setSettingspath(true);
            setDiscoverpath(true);
        }
    }
    const searchClick = () => {
        if (searchPath) {
            setSearchpath(!searchPath);
            setHomepath(true);
            setSettingspath(true);
            setDiscoverpath(true);
        }
    }
    const infoClick = () => {
        if (settingsPath) {
            setSettingspath(!settingsPath);
            setSearchpath(true);
            setDiscoverpath(true);
            setHomepath(true);
        }
    }
    const discoverClick = () => {
        if (discoverPath) {
            setDiscoverpath(!discoverPath);
            setSearchpath(true);
            setHomepath(true);
            setSettingspath(true);
        }
    }

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <>
            <header>
                <nav className="navbar" style={{ backgroundColor: darkMode ? '#2b2c2f' : '#f0f0f0', borderBottomColor: darkMode ? '#3c3939' : '#c6c5c5' }}>
                    <div className="logo-box">
                    </div>
                    <ul>
                        <li><NavLink to="/home" ref={homeRef} onClick={homeClick}><div><button id="home" ><svg aria-label="Home" className={!homePath?"btn-fill-animation":'nav-svg-btn'} fill="currentColor" height="25" width="25" role="img" viewBox="0 0 25 25" style={{ color: darkMode ? 'white' : 'black' }}>
                        {homePath?<path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"/>:
                        <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>}
                        </svg></button></div></NavLink>
                        </li>

                        <li><NavLink to={'search'} ref={searchRef} onClick={searchClick}><div><button id="search" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={searchPath?"search":"search-btn-active"} viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></button></div></NavLink>
                        </li>

                        <li><NavLink to="/discover" ref={disRef} onClick={discoverClick}><div><button id="discover"><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className={!discoverPath?"btn-fill-animation":'nav-svg-btn'} viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                            <path
                                d={discoverPath ? "M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :
                                    "M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"} />
                            <path d={discoverPath ? "m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" : ''} />
                        </svg></button></div></NavLink></li>

                        <li><NavLink to="settings" ref={settingsRef} onClick={infoClick}><div><button id="i-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={settingsPath ? 'setting' : "setting-btn-active"} viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                        </svg></button></div></NavLink></li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export default Header;


{/* <svg aria-label="Home" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg> */}

{/* <svg aria-label="Home" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg> */}