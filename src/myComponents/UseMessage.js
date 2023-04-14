import React, { useState } from 'react'
import UserMassageContext from '../contexts/UserMassageContext'

export const UseMessage = (props) => {
    return (
        <>
                {props.isMessage&&<div className="use-message-content">
                    <div className="use-message-container">
                        <p className="message-para">{props.message}</p>
                    </div>
                </div>}
        </>
    )
}
