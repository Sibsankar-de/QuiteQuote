import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TopicPageRecent } from './TopicPageRecent';
import { TopicPageAll } from './TopicPageAll';
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import { TopicContentEnlarge } from './TopicContentEnlarge';

export const TopicsPages = (props) => {


    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }


    return (
        <>
            <Helmet>
                <title>Quite Quote - {props.topic} Quotes</title>
            </Helmet>
            <main style={{height: '100vh' ,backgroundColor: darkMode?'#202124':'white'}}>
                <div className='topic-page-main-content' id="main-content" >
                    <div className="topic-page-content">
                        <div className="topic-page-header">
                            <div className="topic-img">
                                <img src={props.topicImg} alt="" className='topic-img-pic' draggable={false} style={{outlineColor: darkMode?'#ffffff61':'#000000a1'}}/>
                            </div>
                            <div className="about-topic" style={{color: darkMode?'white':'black'}}>
                                <div className="topic-heading">
                                    <h1>{props.topic} Quotes</h1>
                                </div>
                                <div className="topic-about">
                                    <p>You will get beautiful {props.topic} quotes here ! Discover more and enjoy with sharing your {props.topic} through quotes </p>
                                </div>
                            </div>

                        </div>
                        <div className="topic-page-body">
                            <nav className='topic-page-nav'>
                                <ul>
                                    <li><button id="topic-page-nav-recent-btn"><NavLink to={"recent"} style={{color: darkMode?'white':'#302f2f'}}>Recent</NavLink></button></li>
                                    <li><button id="topic-page-nav-all-btn"><NavLink to={"all"} style={{color: darkMode?'white':'#302f2f'}}>All</NavLink></button></li>
                                </ul>
                            </nav>
                            <div className="topic-page-body-main">
                                <div className="topic-page-container">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.toogleTopicBoxDisplay && <TopicContentEnlarge topic={props.viewerTopic} list={props.list} clickToClose={props.clickToClose} />}
            </main>
        </>
    )
}
