import React from 'react'
import { useState } from 'react';
import { CommentReply } from './CommentReply';

export const CommentContent = (props) => {

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    const [commentLike, setCommentLike] = useState(false);

    function insertAtIndex(str, substring, index) {
        return str.slice(0, index) + substring + str.slice(index);
    }

    function commentLinkManager(comment) {
        return <a href={comment}>{comment}</a>;
    }

    const commentHandeler = (comment, commentManager) => {
        comment = comment.toString();
        let commentArr = comment.split(' ');
        let newComment = '';
        for (let i in commentArr) {
            if (!commentArr[i].includes('https//:')) {
                newComment += commentArr[i] + ' ';
            }
        }
        for (let i in commentArr) {
            if (commentArr[i].includes('https//:')) {
                newComment = insertAtIndex(newComment, commentManager(commentArr[i])[0] + ' ', comment.indexOf(commentArr[i]));
            }
        }
        return newComment;
    }

    const [replyCommentActive, setReplyCommentActive] = useState(false);
    const replyBtnClickHandler = () => {
        if (replyCommentActive) {
            setReplyCommentActive(false);
            props.replyCommentActiver(false);
        }
        else{
            setReplyCommentActive(true);
            props.replyCommentActiver(true);
        }
    }

    
    // useState(()=>{
    //     setReplyList([...replyList, props.reply]);
    // },[props.reply]);
    const replyList = props.replyList;

    return (
        <>
            <div className="comment-set" >
                <div className="comment-set-para">
                    <p className="user-comment" style={{ backgroundColor: darkMode ? '#3c3e45' : '#E4E4E8', borderColor: darkMode ? '#332f2f' : '#d0cccc', borderLeftColor: '#3a62bb' }}>{props.comment}</p>
                    <div className="comment-like-bar">
                        <button onClick={() => !commentLike ? setCommentLike(true) : setCommentLike(false)}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className="bi bi-heart" viewBox="0 0 16 16" fill={!commentLike ? darkMode ? 'white' : 'black' : '#e53935'}>
                            <path d={commentLike ? 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' :
                                "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"} />
                        </svg></button>
                        <button style={{ color: darkMode ? 'white' : 'black' }} onClick={replyBtnClickHandler}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-reply" viewBox="0 0 16 16">
                            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                        </svg></button>
                    </div>
                </div>
                {replyCommentActive && <div className="comment-reply-list">
                    {replyList.length > 0 ? replyList.map((reply, index) => {
                        return <CommentReply key={index} comment={reply} />
                    }) :
                        <p style={{ textAlign: 'center', color: darkMode ? 'white' : 'black' }}>No replies</p>}
                </div>}
            </div>
        </>
    )
}
