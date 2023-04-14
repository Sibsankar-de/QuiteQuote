import React from 'react'

export const CommentReply = (props) => {

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <>
            <div className="comment-reply">
                <div className="reply-set-line"></div>
                <div className="reply-set-para">
                    <div className="reply-set-para-start-line"></div>
                    <p className="user-comment" style={{ backgroundColor: darkMode ? '#3c3e45' : '#E4E4E8', borderColor: darkMode ? '#332f2f' : '#d0cccc', borderLeftColor: '#3a62bb' }}>{props.comment}</p>
                </div>
            </div>
        </>
    )
}
