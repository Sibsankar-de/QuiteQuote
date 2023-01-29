import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TopicPageRecent } from './TopicPageRecent';
import { TopicPageAll } from './TopicPageAll';
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import { TopicContentEnlarge } from './TopicContentEnlarge';

export const TopicsPages = (props) => {

    useEffect(()=>{
        if (props.toogleTopicBoxDisplay === true){
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
        if (props.toogleTopicBoxDisplay === false){
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
    })
    

    return (
        <>
            <Helmet>
                <title>Quite Quote - {props.topic} Quotes</title>
            </Helmet>
            <main>
                <div className='topic-page-main-content' id="main-content" >
                    <div className="topic-page-content">
                        <div className="topic-page-header">
                            <div className="topic-img">
                                <div className="topic-img-border-1">
                                    <div className='border-topic'>
                                        <img src={props.topicImg} alt="" className='topic-img-pic' draggable={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="about-topic">
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
                                    <li><button id="topic-page-nav-recent-btn"><NavLink to={"recent"}>Recent</NavLink></button></li>
                                    <li><button id="topic-page-nav-all-btn"><NavLink to={"all"}>All</NavLink></button></li>
                                </ul>
                            </nav>
                            <div className="topic-page-body-main">
                                <div className="topic-page-container">
                                    <Outlet/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.toogleTopicBoxDisplay&&<TopicContentEnlarge topic={props.viewerTopic} list={props.list} clickToClose={props.clickToClose}/>}
            </main> 
        </>
    )
}
