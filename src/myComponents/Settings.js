import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Settings = () => {

    let user_name;
    if (localStorage.getItem('userName') === null) {
        user_name = 'user_name';
    }
    else {
        user_name = localStorage.getItem('userName');
    }

    let user_img;
    if (localStorage.getItem('userImg') === null) {
        user_img = null;
    }
    else {
        user_img = JSON.parse(localStorage.getItem('userImg'));
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
            <Helmet>
                <title>Quite Quote - Settings</title>
            </Helmet>
            <main style={{ backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div className='settings-main-content' id='main-content' >
                    <div className="settings-content">
                        <div className="settings-header" style={{ color: darkMode ? 'white' : 'black' }}>
                            <h1>Settings</h1>
                        </div>
                        <div className="settings-container">
                            <div className="user-info">
                                <div className="user-img-box">
                                    <div className="profile-img" >
                                        <img src={user_img===null? require("./img/user.png") : user_img} alt="" className="user-img" draggable={false} style={{ borderColor: darkMode ? 'white' : 'black' }} />
                                    </div>

                                </div>
                                <div className="profile-user-name">
                                    <div className="profile-user-name-display">
                                        <div className="profile-user-name-view" >
                                            <p className='profile-user-name-name' style={{ color: darkMode ? 'white' : 'black' }}>@{user_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-options">
                                <ul className='settings-opption-section-1'>
                                    <li><Link to={'/settings/profile'} style={{ color: darkMode ? 'white' : 'black' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className='option-svg'>
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg><div className="settings-option-para">
                                            <p className='option-name'>My Profile</p>
                                            <p className="option-description">Update your profile</p>
                                        </div></Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='option-arrow' viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></li>
                                    <hr />
                                    <li ><Link to={'/settings/saved_contents'} style={{ color: darkMode ? 'white' : 'black' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    </svg><div className="settings-option-para">
                                            <p className='option-name'>Saved Contents</p>
                                            <p className="option-description">Watch the contents you saved in your feed</p>
                                        </div></Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='option-arrow' viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></li>
                                    <hr />
                                    <li ><Link to={'/settings/theme'} style={{ color: darkMode ? 'white' : 'black' }}>{darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                    </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className='option-svg'>
                                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                        </svg>}<div className="settings-option-para">
                                            <p className='option-name'>Change Theme</p>
                                            <p className="option-description">Change your theme to dark mode</p>
                                        </div></Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='option-arrow' viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></li>
                                    <hr />
                                    <li><Link to={'/information'} style={{ color: darkMode ? 'white' : 'black' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className='option-svg'>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg><div className="settings-option-para">
                                            <p className='option-name'>About Us</p>
                                            <p className="option-description">iInformation about us</p>
                                        </div></Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='option-arrow' viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
