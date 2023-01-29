import React from 'react';
import { useState, useEffect } from 'react';
import { CommentExpand } from './CommentExpand';
import { ThreeDots } from './ThreeDots';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const InnerContent = (props) => {

    const likeRef = useRef(null);
    
    let  localLiikeList = JSON.parse(localStorage.getItem('likeList'))
    const [isLiked, setIsLiked] = useState(localLiikeList[props.property.sno].isLiked);
    const likeClick = () => {
        if (isLiked === false){
            setIsLiked(true);
            localLiikeList.splice(props.property.sno, 1 ,{isLiked: true});
            localStorage.setItem('likeList', JSON.stringify(localLiikeList));
        }
        else {
            setIsLiked(false);
            localLiikeList.splice(props.property.sno, 1 ,{isLiked: false});
            localStorage.setItem('likeList', JSON.stringify(localLiikeList));
        }
    }

    useEffect(()=>{
        localStorage.setItem('likeList', JSON.stringify(localLiikeList));
    },[isLiked]);


    
    const [commentDisplay, setCommentdisplay] = useState(false);
    const CommentClick = () => {
        if (commentDisplay === false) {
            setCommentdisplay(true);
        }
        else {
            setCommentdisplay(false)
        }
    }



    const [commentList, setCommentList] = useState([]);
    const addComment = (comment) => {
        const myComment = [comment];
        setCommentList([...commentList, myComment]);
    }


    const btnRef = useRef();

    const [tooglevalue, setToogleValue] = useState(`none`);
    const toogleDisplay = {
        display: tooglevalue
    }

    const threeDot = () => {
        if (tooglevalue === `none`) {
            setToogleValue('flex');
        }
        else {
            setToogleValue('none');
        }
    }

    const threeDotref = useRef(null);
    useEffect(() => {
        document.addEventListener('scroll', function () {
            setToogleValue('none');
        })
        document.getElementById('main-content').addEventListener('click', function () {
            setToogleValue('none');
        })
    }, [tooglevalue]);


    return (
        <>

            <div className="content-box">
                <div className="user-bar">
                    <div className="user-bar-img">
                        <Link to={props.property.link}>
                            <img src={props.property.dpImg} alt="" width="50px" className="dp-img" draggable={false} onContextMenu={(e) => e.preventDefault()} />
                        </Link>
                    </div>
                    <div className="user-status">
                        <p className="user-name">{'@' + props.property.userName}</p>
                        <div className="content-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-globe-asia-australia" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z" />
                            </svg>
                            <p>public</p>
                        </div>
                    </div>
                    <div className="three-dot-funcs">
                        <button ref={btnRef} className="three-dot" onClick={threeDot}><svg
                            xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"
                            fill="currentColor" className="bi bi-toggles2" viewBox="0 0 16 16" >
                            <path
                                d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                            <path
                                d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                            <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                        </svg></button>

                        <div className="three-dot-opts" ref={threeDotref} style={toogleDisplay}><ThreeDots downloadRef={props.property.feedImg} /></div>

                    </div>
                </div>
                <div className="content" >
                    <img draggable={false} src={props.property.feedImg} alt="Loading...." onDoubleClick={likeClick} onContextMenu={(e) => e.preventDefault()} />
                </div>
                <div className="like-bar">
                    <div className="like-nav-opts">
                        <ul><button className="like-button" ><svg xmlns="http://www.w3.org/2000/svg" ref={likeRef}
                            width="30px" height="30px" fill={!isLiked ? 'black' : '#e53935'} className={!isLiked ? 'like-btn-svg-unclicked' : 'like-btn-svg-clicked'}
                            viewBox="0 0 16 16" onClick={likeClick}>
                            <path
                                d={!isLiked ? 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' :
                                    'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'} />
                        </svg></button>
                        </ul>
                        <ul>
                            <button className="add-comment"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={!commentDisplay ? 'bi bi-chat-square-text' : 'bi bi-chat-square-text-fill'} viewBox="0 0 16 16" onClick={CommentClick}>
                                <path d={!commentDisplay ? "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" :
                                    "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"} />
                                <path d={!commentDisplay ? "M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" : ""} />
                            </svg></button>
                        </ul>
                        <ul><button className="share"><a href={props.property.feedImg} download="feedImg"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg></a></button>
                        </ul>
                    </div>
                    {commentDisplay && <div className="comment-box">
                        <div className="comment-funcs" >
                            <CommentExpand commentList={commentList} addComment={addComment} clickToClose={() => setCommentdisplay(false)} />
                        </div>
                    </div>}
                </div>
            </div>

        </>
    )
}
