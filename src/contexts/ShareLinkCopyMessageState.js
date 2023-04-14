import React from 'react'
import UserMassageContext from './UserMassageContext'

export const ShareLinkCopyMessageState = (props) => {
  return (
    <UserMassageContext.Provider value={{ message: 'Text copied', isMessage: true }}>
        {props.children}
    </UserMassageContext.Provider>
  )
}
