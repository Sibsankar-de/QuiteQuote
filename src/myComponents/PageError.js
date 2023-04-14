import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const PageError = () => {
    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }
    const style = {
        textAlign: 'center',
        marginTop: '4em',
        color: darkMode ? 'white' : 'black'
    }


    return (
        <>
            <Helmet>
                <title>Page Not Found | 404 error occured</title>
            </Helmet>
            <div style={style}>
                <h1>Page Not Found</h1>
                <h2>404 error</h2>
                <h5>Refresh the page you browse or click on this link- <Link to="home">HOME</Link></h5>
                <button id="refresh-page" onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </>
    )
}
