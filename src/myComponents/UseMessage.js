import React from 'react'

export const UseMessage = (props) => {
    return (
        <>
            <main className="use-massage-content">
                <div className="use-message-container">
                    {props.message}
                </div>
            </main>
        </>
    )
}
