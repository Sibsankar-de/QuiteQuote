import React from 'react'
import { useState, useEffect} from 'react';
import { SettingProfileImg } from './SettingProfileImg';
import { SettingProfileName } from './SettingProfileName';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const SettingProfile = () => {

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

    const [editable, setEditable] = useState(false);
    const [profileChangeable, setProfileChangeable] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);
    const [profileName, setProfileName] = useState('user_name')
    const [profileImg, setProfileImg] = useState(user_img);

    const updateUserName = (userName) => {
        setProfileName(userName);
        setActiveEdit(false);
        setEditable(false);
    }

    const cancelEdit = () => {
        setActiveEdit(false);
        setEditable(false);
    }

    const changeProfileImg = (newImage) => {
        setProfileImg(newImage);
        localStorage.setItem('userImg', JSON.stringify(newImage));
    }

    const [activeUploadProfileImg, setActiveUploadProfileImg] = useState(false);
    const clickToClose = () => {
        setActiveUploadProfileImg(false);
    }

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    useEffect(() => {
        if (activeUploadProfileImg === false) {
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
        if (activeUploadProfileImg === true) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        }
    })

    return (
        <>
            <Helmet>
                <title>Profile - {user_name === "user_name" ? "user" : user_name}</title>
            </Helmet>
            <main style={{ height: '100vh', backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div id="main-content">
                    <div className="settings-profile-content">
                        <div className="settings-pages-heading" style={{ color: darkMode ? 'white' : 'black' }}>
                            <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            </Link>
                            <h1>Change Your Profile</h1>
                        </div>
                        <div className="settings-profile-container">
                            <div className="user-info">
                                <div className="user-img-box">
                                    <div className="profile-img" onMouseEnter={() => setProfileChangeable(true)} onMouseLeave={() => setProfileChangeable(false)}>
                                        <img src={profileImg===null? require("./img/user.png") : profileImg} alt="" className="user-img" draggable={false} style={{ borderColor: darkMode ? 'white' : 'black' }} />
                                    </div>
                                    {profileChangeable && <div className="profile-img-change-back" onMouseMove={() => setProfileChangeable(true)} onMouseLeave={() => setProfileChangeable(false)}>
                                        <div className="change-profile-img">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="change-profile-image-btn" viewBox="0 0 16 16" onClick={() => setActiveUploadProfileImg(true)}>
                                                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                            </svg>
                                        </div>
                                    </div>}
                                </div>
                                <div className="profile-user-name">
                                    <div className="profile-user-name-display">
                                        {!activeEdit ? <div className="profile-user-name-view" onMouseEnter={() => setEditable(true)} onMouseLeave={() => setEditable(false)}>
                                            <p className='profile-user-name-name' style={{ color: darkMode ? 'white' : 'black' }}>@{user_name}</p>
                                            {<button className="user-name-edit-btn" onClick={() => setActiveEdit(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black', paddingLeft: '0.4em' }}>
                                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                                </svg>
                                            </button>}
                                        </div> :
                                            <SettingProfileName updateUserName={updateUserName} cancelEdit={cancelEdit} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {activeUploadProfileImg && <SettingProfileImg changeProfileImg={changeProfileImg} clickToClose={clickToClose} />}
            </main>
        </>
    )
}
