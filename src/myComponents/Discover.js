import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Outlet } from 'react-router-dom'

export const Discover = () => {

    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    const [listitem, setListitem] = useState('');
    return (
        <>
        
        
            <Helmet>
                <title>Quite Quote - Discover your topics</title>
            </Helmet>
            <main style={{backgroundColor: darkMode?'#202124':'white', height: '100vh'}}>
                <div id="main-content" className='discover-main-content'>
                    <div className="container" id='discover-container'>
                        <h2 id="heading" className='discover-heading' style={{color: darkMode?'white':'black'}}>Discover your Topics</h2>
                        <ul className="topics" id='discover-topics'>
                            <li><Link to={'love'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_1.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="love" width="60px" />Love</Link>
                            </li>
                            
                            <li><Link to={'happy'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_2.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="happy_sign"
                                width="60px" />Happy</Link></li>
                            <li><Link to={'sad'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_3.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="sad_sign" width="60px" />Sad</Link>
                            </li>
                            <li><Link to={'fun'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_4.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="fun_sign"
                                width="60px" />Funny</Link></li>
                            <li><Link to={'family'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_5.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="family" width="60px" />With
                                Family</Link></li>
                            <li><Link to={'motivation'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_6.png")} style={{borderColor: darkMode?'#ffffff7a':'#00000066'}} draggable="false" alt="friend_sign" width="60px" />Motivation</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </main>
        </>
    )
}
