import React from 'react'

export const ThreeDots = (props) => {
    return (
        <div className="click-buttons">
            <ul>
                <a href={props.downloadRef} download="feedImg"><li><button className="three-dot-download">Download</button></li></a>
                {/* <li><button className="three-dot-share">Share</button></li> */}
                <li><button className="three-dot-save-btn" onClick={props.saveButtonClickHandeler}>Save</button></li>
            </ul>
        </div>
    )
}
