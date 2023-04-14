import React, { useContext } from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Content } from './Content';
import { useState, useEffect } from 'react';
import { Addtopics } from './Addtopics';
import { Addbox } from './Addbox';
import { LoopInterest } from './LoopInterest';
import { UseMessage } from './UseMessage';
import { ShareLinkCopyMessageState } from '../contexts/ShareLinkCopyMessageState';


export const Main = (props) => {

    const [contentUpdate, setContentUpdate] = useState({});


    const contentManager = (feedUpdatelist) => {
        const createdContent = {};
        for (let key in props.content) {
            if (props.content.hasOwnProperty(key)) {
                if (feedUpdatelist.includes(key)) {
                    createdContent[key] = props.content[key];
                }
            }
        }
        setContentUpdate(createdContent);
    }

    const interestRef = useRef(null);


    const mainRef = useRef(null);
    const [value, setValue] = useState(true);

    useEffect(() => {
        if (value === false) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementById('add-box').style.animationName = 'addboxAnimationAppare';
        }
        if (value === true) {
            document.getElementById('add-box').style.animationName = 'addboxAnimationDisappare';
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';

        }
    })

    useEffect(() => {
        document.getElementById('close-btn').addEventListener('click', () => {
            document.getElementById('add-box').style.animationName = 'addboxAnimationDisappare';

        })
    })

    const addBoxbtn = () => {
        if (value === true) {
            setValue(false);
        }
        else {
            setValue(true);
        }
    }

    let interestList;
    if (localStorage.getItem('interestList') === null) {
        interestList = [];
    }
    else {
        interestList = JSON.parse(localStorage.getItem('interestList'));
    }
    const [list, setList] = useState(interestList);


    const onClickAddbtn = (listItem) => {
        if (value === false && listItem.length > 0) {
            setValue(true);
        }
        setList(listItem);
        localStorage.setItem('interestList', JSON.stringify(listItem));
    }

    useEffect(() => {
        localStorage.removeItem('interestList')
    }, [])

    const removeInterest = (item) => {
        setList(list.filter((e) => {
            return e !== item;
        }))
    }

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    // const {message, isMessage} = useContext(ShareLinkCopyMessageState);

    return (
        <>
            <Helmet>
                <title>Quite Quote - Home, All your Favourite Quotes are Here</title>
            </Helmet>
            <main style={{ backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div id="main-content" ref={mainRef} style={value ? { pointerEvents: 'all' } : { pointerEvents: 'none' }}>
                    <div className="container">
                        <div id="people-box" ref={interestRef} style={{ backgroundColor: darkMode ? '#35363a' : 'white', borderColor: darkMode ? '#262626' : '#d0cccc' }}>
                            {list.length >= 5 && <div id="prev-btn" >
                                <button className="click-next" onClick={() => interestRef.current.scrollLeft += -105.969}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </button>
                            </div>}
                            <div id="interest-box">
                                <div id="added-interests">
                                    <LoopInterest list={list} />
                                </div>
                                <button id="add-interest-btn" style={{ color: darkMode ? '#c7c3c3' : 'black' }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                    fill={darkMode ? '#c7c3c3' : "#3f3f40"} className="bi bi-plus-circle" viewBox="0 0 16 16" onClick={addBoxbtn}>
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>Add Interests</button>
                            </div>
                            {list.length >= 5 && <div id="next-btn" >
                                <button className="click-next" onClick={() => interestRef.current.scrollLeft += 105.969}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>}
                        </div>
                        <div id="feed-box">
                            <Content mainDom={mainRef} content={Object.keys(contentUpdate).length !== 0 ? contentUpdate : props.content} />
                        </div>
                    </div>
                    <Addtopics />
                </div>
                {<Addbox style={{ display: !value ? 'flex' : 'none' }} clickToClose={addBoxbtn} onClick={onClickAddbtn} removeInterest={removeInterest} list={list} updateFeed={contentManager} />}
                {/* <ShareLinkCopyMessageState> */}
                    {/* <UseMessage message={message} isMessage={isMessage}/> */}
                {/* </ShareLinkCopyMessageState> */}
            </main>
            <footer className='main-page-footer' style={{ backgroundColor: darkMode ? '#202124' : 'white', color: darkMode ? 'white' : 'black' }}>
                <div className="foot-refresh">
                    <button id="refresh-page" onClick={() => { window.location.reload(); window.scrollTo(0, 0) }}>Refresh</button>
                    <p>For more and new contents refresh page</p>
                </div>
                <p>All rights&copy; are reserved and contents are free to download</p>
            </footer>
        </>
    )
}

export default Main
