import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Outlet } from 'react-router-dom'

export const Discover = () => {

    const [listitem, setListitem] = useState('');
    return (
        <>
        
        
            <Helmet>
                <title>Quite Quote - Discover your topics</title>
            </Helmet>
            <main>
                <div id="main-content" className='discover-main-content'>
                    <div className="container" id='discover-container'>
                        <h2 id="heading" className='discover-heading'>Discover your Topics</h2>
                        <ul className="topics" id='discover-topics'>
                            <li><Link to={'love'}><img src={require("./img/interest_1.png")} draggable="false" alt="love" width="60px" />Love</Link>
                            </li>
                            
                            <li><Link to={'happy'}><img src={require("./img/interest_2.png")} draggable="false" alt="happy_sign"
                                width="60px" />Happy</Link></li>
                            <li><Link to={'sad'}><img src={require("./img/interest_3.png")} draggable="false" alt="sad_sign" width="60px" />Sad</Link>
                            </li>
                            <li><Link to={'fun'}><img src={require("./img/interest_4.png")} draggable="false" alt="fun_sign"
                                width="60px" />Funny</Link></li>
                            <li><Link to={'family'}><img src={require("./img/interest_5.png")} draggable="false" alt="family" width="60px" />With
                                Family</Link></li>
                            <li><Link to={'motivation'}><img src={require("./img/interest_6.png")} draggable="false" alt="friend_sign" width="60px" />Motivation</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </main>
        </>
    )
}
