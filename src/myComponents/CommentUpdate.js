import React from 'react'

export const CommentUpdate = (props) => {

    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <div className="comment-screen" >
            <div className="comments">
                <ul className="comment-list" ref={props.ref}>
                    {props.commentList.length===0? <p className='no-comments'>No Comments to display</p>:props.commentList.map((comment, index)=>{
                    return <li key={index}><p className="user-comment" style={{backgroundColor: darkMode?'#3c3e45':'white', borderColor: darkMode?'#332f2f':'#d0cccc'}}>{comment}</p></li>
                })}
                </ul>
            </div>
        </div>
    )


}
