import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { PrivacyInformation } from './PrivacyInformation'
import { HashLink } from 'react-router-hash-link'

export const Information = () => {

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
                <title>Quite Quote - About us</title>
            </Helmet>
            <main style={{ height: '100vh', backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div id="main-content" >
                    <div className="container" id="information-container" style={{ color: darkMode ? 'white' : 'black' }}>
                        <div className="settings-pages-heading" style={{ color: darkMode ? 'white' : 'black' }}>
                            <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            </Link>
                            <h1>About Us</h1>
                        </div>
                        <div id="paragraphs">
                            <p id="p-1">
                                In this Website you will get a lot of quotes and you can also find
                                your interest and you will view according to it.
                            </p>
                            <p id="p-2">
                                For More details you can mail us on
                                <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GFrJzkNfkgrKwnJRLqbftqhVWlwBnxsVrjxrscGNCCCNxkbHPDnrjXplhqwWSgcqLvbd" target='_blank'><b
                                    id="email" > quitequotefeedback@gmail.com <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: darkMode ? 'white' : 'black' }}>
                                        <path d="M0 0h24v24H0V0z" fill="none"></path>

                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></b></a>
                            </p>
                            <p id="p-3">
                                All rights for this website, are reserved according to
                                copyright&copy; act 2022
                            </p>
                        </div>
                        <div className="privacy-information-section">
                                <PrivacyInformation />
                        </div>
                        <div className="information-weblinks-box" style={{ backgroundColor: darkMode ? '#4b72be40' : '#7a7e8540' }}>
                            <h3 className="information-weblinks-box-heading">Discover from us</h3>
                            <div className="information-weblinks">
                                <ul className='information-weblinks-ul'>
                                    <li><Link to={'/home'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Home</Link></li>
                                    <li><Link to={'/discover'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Discover :-</Link></li>
                                    <ul className="information-sublinks">
                                        <li><Link to={'/discover/love'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Love</Link></li>
                                        <li><Link to={'/discover/happy'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Happy</Link></li>
                                        <li><Link to={'/discover/motivation'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Motivation</Link></li>
                                        <li><Link to={'/discover/fun'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Fun</Link></li>
                                    </ul>
                                </ul>
                                <ul className='information-weblinks-ul'>
                                    <li><Link to={'/settings'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Settings :-</Link></li>
                                    <ul className="information-sublinks">
                                        <li><Link to={'/settings/profile'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Profile</Link></li>
                                        <li><Link to={'/settings/theme'} style={{ color: darkMode ? '#55bdf9c4' : '#04273b' }}>Theme</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
