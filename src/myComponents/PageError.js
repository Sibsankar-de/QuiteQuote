import React from 'react'
import { Helmet } from 'react-helmet'

export const PageError = () => {
    const style = {
        textAlign: 'center',
        marginTop: '4em'
    }
    return (
        <>
            <Helmet>
                <title>Page Not Found | 404 error occured</title>
            </Helmet>
            <div style={style}>
                <h1>Page Not Found</h1>
                <h2>404 error</h2>
                <h5>Refresh the page you browse or click on this link- <a href="/home">HOME</a></h5>
                <button id="refresh-page" onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </>
    )
}
