import React from 'react'
import { HashLink } from 'react-router-hash-link'

export const PrivacyInformation = () => {
    return (
        <>
            <div className="privacy-help-box">

                <HashLink smooth to={'/information/#privacy'}>
                    <h2>Privacy Help</h2>
                </HashLink>
                <p>Your shared inforfations are keep safe in our directories</p>
                <div className="privacy-para">
                    <li>We will never share your profile image to others</li>
                    <li>We will naver share your profile name to others</li>
                    <li>Profile contents are just to visible for you</li>
                    <li>Your given details will be stored in your browser localStorage</li>

                </div>
            </div>
        </>
    )
}
