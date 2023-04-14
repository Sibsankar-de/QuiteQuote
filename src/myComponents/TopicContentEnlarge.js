import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';

export const TopicContentEnlarge = (props) => {

  const resP1 = useMediaQuery({
    query: "(min-device-width: 1024px)",
  })
  const resP2 = useMediaQuery({
    query: "(max-device-width: 425px)",
  })
  const resP3 = useMediaQuery({
    query: "(max-device-width: 460px)",
  })
  const resP4 = useMediaQuery({
    query: "(max-device-width: 435px)",
  })
  const resP5 = useMediaQuery({
    query: "(max-device-width: 375px)",
  })
  const resP6 = useMediaQuery({
    query: "(max-device-width: 345px)",
  })
  const resP7 = useMediaQuery({
    query: "(max-device-width: 320px)",
  })
  const resP8 = useMediaQuery({
    query: "(max-device-width: 320px)",
  })
  const resP9 = useMediaQuery({
    query: "(max-device-width: 1024px)",
  })

  let slideProperty
  resP1 && (slideProperty = 520.99);
  resP2 && (slideProperty = 360.99);
  resP3 && (slideProperty = 410.99);
  resP4 && (slideProperty = 380.99);
  resP5 && (slideProperty = 345.99);
  resP6 && (slideProperty = 320.99);
  resP7 && (slideProperty = 310.99);
  resP8 && (slideProperty = 290.99);
  resP9 && (slideProperty = 520.99);


  const topicImgViewRef = useRef(null);

  let x = 0;
  const contentMaker = (contents) => {
    const List = [];
    for (let i in contents) {
      for (let j of contents[i].feedElem) {
        List.push(
          {
            sno: x,
            userName: contents[i].userName,
            dpImg: contents[i].dpElem,
            feedImg: j,
            isLiked: false
          }
        );
        x = x + 1;
      }
    }
    return List;
  }

  let darkMode;
  if (localStorage.getItem('isDarkMode') === null) {
    darkMode = false;
  }
  else {
    darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  }



  return (
    <>
      <div className="topic-img-view-box-background">
        <div className="topic-img-view-box" style={{ backgroundColor: darkMode ? '#35363a' : 'white', borderColor: darkMode ? '#35363a' : 'black' }}>
          <div id="close-topic-img-view-box" >
            <button id='close-btn' onClick={props.clickToClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          <div className="topic-img-view-box-body">
            <div className="topic-prev-btn" >
              <button className="click-next" onClick={() => topicImgViewRef.current.scrollLeft += -slideProperty}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>
            </div>
            <div className="topic-img-box" ref={topicImgViewRef}>
              <ul>
                {contentMaker(props.list).map((item, index) => {
                  return item.userName === props.topic && <li key={index}><img src={item.feedImg} alt="" draggable={false} onContextMenu={(e) => e.preventDefault()} /></li>
                })}
              </ul>
            </div>
            <div className="topic-next-btn" >
              <button className="click-next" onClick={() => topicImgViewRef.current.scrollLeft += slideProperty}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16" >
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
