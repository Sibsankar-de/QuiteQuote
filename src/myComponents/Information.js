import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Information = () => {
    return (
        <>
            <Helmet>
                <title>Quite Quote - About us</title>
            </Helmet>
            <main>
                <div id="main-content" >
                    <div className="container" id="information-container">
                        <h1 className="i-head">About Us</h1>
                        <div id="paragraphs">
                            <p id="p-1">
                                In this Website you will get a lot of quotes and you can also find
                                your interest and you will view according to it.
                            </p>
                            <p id="p-2">
                                For More details you can mail us on
                                <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GFrJzkNfkgrKwnJRLqbftqhVWlwBnxsVrjxrscGNCCCNxkbHPDnrjXplhqwWSgcqLvbd" target='_blank'><b
                                    id="email"> quitequotefeedback@gmail.com <svg width="16" height="16" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            
                                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                        </svg></b></a>
                            </p>
                            <p id="p-3">
                                All rights for this website, are reserved according to
                                copyright&copy; act 2022
                            </p>
                        </div>
                        <Link to="/home" id="home-link"><button id="return-home">Return Home</button></Link>
                    </div>
                </div>
            </main>
        </>
    )
}
