import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export const ThreeDots = (props) => {
    // const { setmessage, setIsMessage } = useContext(UserMassageContext);
    const [isMessage, setIsMessage] = useState(false);
    const shareBtnClickHandler = () => {
        
    }
    return (
        <div className="click-buttons">
            <ul>
                <a href={props.downloadRef} download="feedImg"><li><button className="three-dot-download">Download</button></li></a>
                    <CopyToClipboard text={props.copyLink} ><li onClick={shareBtnClickHandler}><button className="three-dot-share-btn">Share</button></li></CopyToClipboard>
                <li onClick={props.saveButtonClickHandeler}><button className="three-dot-save-btn" >{props.isSaved ? "Unsave" : "Save"}</button></li>
            </ul>
        </div>
    )
}
