import React from 'react'
import { useState, useRef, useEffect} from 'react';
import { NavLink, Outlet} from 'react-router-dom'

function Header() {
    const homeRef = useRef(null);
    const infoRef = useRef(null);
    const disRef = useRef(null);
    const [homePath, setHomepath] = useState(true);
    const [infoPath, setInfopath] = useState(true);
    const [discoverPath, setDiscoverpath] = useState(true);

    useEffect(()=>{
        homeRef.current.className === 'active'?setHomepath(false):setHomepath(true);
    }, [homeRef]);
    useEffect(()=>{
        infoRef.current.className === 'active'?setInfopath(false):setInfopath(true);
    }, [infoPath]);
    useEffect(()=>{
        disRef.current.className === 'active'?setDiscoverpath(false):setDiscoverpath(true);
    }, [discoverPath]);
    

    const homeClick = ()=>{
        if(homePath){
            setHomepath(!homePath);
            setInfopath(true);
            setDiscoverpath(true);
        }
    }
    const infoClick = ()=>{
        if(infoPath){
            setInfopath(!infoPath);
            setDiscoverpath(true);
            setHomepath(true);
        }
    }
    const discoverClick = ()=>{
        if(discoverPath){
            setDiscoverpath(!discoverPath);
            setHomepath(true);
            setInfopath(true);
        }
    }

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo-box">
                    </div>
                    <ul>
                        <li><NavLink to="/home" ref={homeRef} onClick={homeClick}><button id="home" ><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path
                                d={homePath ? "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" :
                                    "M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"}
                            />
                        </svg></button></NavLink>
                        </li>

                        <li><NavLink to="information" ref={infoRef} onClick={infoClick}><button id="i-button"><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className={infoPath ? "bi bi-info-circle" : "bi bi-info-circle-fill"} viewBox="0 0 16 16">
                            <path d={infoPath ? "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" : ""} />
                            <path
                                d={infoPath ? "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :
                                    "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"} />
                        </svg></button></NavLink></li>

                        <li><NavLink to="discover" ref={disRef} onClick={discoverClick}><button id="discover"><svg xmlns="http://www.w3.org/2000/svg" width="25px"
                            height="25px" fill="currentColor" className={discoverPath ? "bi bi-compass" : "bi bi-compass-fill"} viewBox="0 0 16 16">
                            <path
                                d={discoverPath ? "M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :
                                    "M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"} />
                            <path d={discoverPath ? "m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" : ''} />
                        </svg></button></NavLink></li>
                    </ul>
                </nav>
            </header>
            
            <Outlet />
        </>
    )
}

export default Header;