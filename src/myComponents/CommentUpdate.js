import React, { useState } from 'react'
import { CommentContent } from './CommentContent'

export const CommentUpdate = (props) => {

    

    return (
        <div className="comment-screen" >
            <div className="comments">
                <ul ref={props.ref}>
                    {props.commentList.length === 0 ? <p className='no-comments'>No Comments to display</p> : props.commentList.map((comment, index) => {
                        return <li className='comment-update-li' key={index}><CommentContent comment={comment} replyList={props.replyList} replyCommentActiver={props.replyCommentActiver}/></li>
                    })}
                </ul>
            </div>
        </div>
    )


}
