import React, { useEffect, useRef, useState } from 'react'
import { CommentReply } from './CommentReply';
import { CommentUpdate } from './CommentUpdate'

export const CommentExpand = (props) => {

    // const [value, setValue] = useState(false);

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }


    const commentRef = useRef(null);

    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');
    const [replyList, setReplyList] = useState([]);
    const [replyCommentActive, setReplyCommentActive] = useState(false);

    const replyCommentActiver = (isActive) => {
        if (isActive) {
            setReplyCommentActive(true);
        }
        else{
            setReplyCommentActive(false);
        }
    }

    const commentUpdate = (e) => {
        e.preventDefault();
        if (comment.trim().length === 0) {
            setComment('');
        }
        else if (comment.length != 0) {
            props.addComment(comment.trim());
            setComment('');
        }

    }

    const replyUpdate = (e) => {
        e.preventDefault();
        if (reply.trim().length === 0) {
            setReply('');
        }
        else if (reply.length != 0) {
            setReplyList([...replyList, reply.trim()]);
            setReply('');
        }
    }


    useEffect(() => {
        commentRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, [comment]);


    return (
        <>
            <div id="close-comment-box">
                <button id='close-btn' onClick={props.clickToClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>

            <div className="comment-box-header">
                <h2>comments</h2>
            </div>

            <div className="all-comments" ref={commentRef}>
                <CommentUpdate commentList={props.commentList} replyCommentActiver={replyCommentActiver} replyList={replyList}/>
            </div>

            <div className="write-comment">
                <form onSubmit={replyCommentActive ? replyUpdate : commentUpdate}>
                    <input type="text" placeholder={replyCommentActive ? "Add your reply" : "Add a comment"} value={replyCommentActive ? reply : comment} className="my-comment" onChange={e => replyCommentActive ? setReply(e.target.value) : setComment(e.target.value)} />
                </form>
                <div className="comment-send-btn">
                    <button className="send-comment" onClick={replyCommentActive ? replyUpdate : commentUpdate}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                    </button>
                </div>
            </div>

        </>

    )
}
