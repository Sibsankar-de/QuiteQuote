import React from 'react'

export const CommentUpdate = (props) => {

    return (
        <div className="comment-screen" >
            <div className="comments">
                <ul className="comment-list" ref={props.ref}>
                    {props.commentList.length===0? <p className='no-comments'>No Comments to display</p>:props.commentList.map((comment, index)=>{
                    return <li key={index}><p className="user-comment">{comment}</p></li>
                })}
                </ul>
            </div>
        </div>
    )


}
