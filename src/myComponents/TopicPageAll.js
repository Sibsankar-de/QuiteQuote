import React from 'react'

export const TopicPageAll = (props) => {
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


  return (
      <div className="topic-page-all-main">
        <div className="topic-page-all-main-container">
          <div className="topic-page-all-main-contents">
            <ul>
              {contentMaker(props.content).map((item, index) => {
                return item.userName === props.topic && <li key={index}><img src={item.feedImg} alt="Loading..." draggable={false} onClick={props.onClick}/></li>
              })}
            </ul>
          </div>
        </div>
      </div>
  )
}
