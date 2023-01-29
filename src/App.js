// import logo from './logo.svg';
import './App.css';
// import './responsive.css';
import './cssFiles/main_style.css';
import './cssFiles/button_funcs.css';
import './cssFiles/header_style.css';
import './cssFiles/discover.css';
import './cssFiles/topicPage_styles.css';
import './index.css';
import Header from './myComponents/Header';
import { Main } from './myComponents/Main';
import { Discover } from './myComponents/Discover';
import { Information } from './myComponents/Information';
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { TopicsPages } from './myComponents/TopicsPages';
import { PageError } from './myComponents/PageError';
import { TopicPageAll } from './myComponents/TopicPageAll';
import { TopicPageRecent } from './myComponents/TopicPageRecent';
import { useEffect, useState } from 'react';


function App() {

  useEffect(() => {
    document.getElementsByTagName('body')[0].scrollTo = (0, 0)
  }, [])


  const content = {
    love: {
      userName: 'Love_quotes',
      link: '/discover/love/all',
      dpElem: require('./myComponents/img/interest_1.png'),
      feedElem: [require('./myComponents/img/feed_img4.jpg'), require('./myComponents/img/feed_img6.jpg'), require('./myComponents/img/feed_img10.jpg'),]
    },
    happy: {
      userName: 'Happy_quotes',
      link: '/discover/happy/all',
      dpElem: require('./myComponents/img/interest_2.png'),
      feedElem: [require('./myComponents/img/feed_img9.jpg'), require('./myComponents/img/feed_img8.jpg'),]
    },
    sad: {
      userName: 'Sad_quotes',
      link: '/discover/sad/all',
      dpElem: require('./myComponents/img/interest_3.png'),
      feedElem: [require('./myComponents/img/feed_img11.jpg'), require('./myComponents/img/feed_img12.png')]
    },
    motivation: {
      userName: 'Motivational_quotes',
      link: '/discover/motivation/all',
      dpElem: require('./myComponents/img/interest_6.png'),
      feedElem: [require('./myComponents/img/feed_img7.jpg'), require('./myComponents/img/feed_img5.jpg'), require('./myComponents/img/feed_img13.png'), require('./myComponents/img/feed_img14.png'), require('./myComponents/img/feed_img15.png')]
    }
  }


  let x = 0;
  for (let i in content) {
    x += content[i].feedElem.length;
  }

  let localLiikeList;
    if (localStorage.getItem('likeList') === null) {
        localLiikeList = [];
    }
    else {
        localLiikeList = JSON.parse(localStorage.getItem('likeList'))
    }

  while (localLiikeList.length < x){
    localLiikeList.push({isLiked: false});
  }
  
  localStorage.setItem('likeList', JSON.stringify(localLiikeList));



  const sourceLove = require("./myComponents/img/interest_1.png");
  const sourceHappy = require("./myComponents/img/interest_2.png");
  const sourceSad = require("./myComponents/img/interest_3.png");
  const sourceFun = require("./myComponents/img/interest_4.png");
  const sourceFamily = require("./myComponents/img/interest_5.png");
  const sourceMotiv = require("./myComponents/img/interest_6.png");

  const [toogleDisplay, setToogleDisplay] = useState(false); // Display controll for topic-box-img-viewer
  const clickToClose = () => {
    if (toogleDisplay === false) {
      setToogleDisplay(true);
    }
    else {
      setToogleDisplay(false);
    }
  }


  return (
    <>
      {/* <Header /> */}
      <Routes>
      <Route path={"/"} element={<Navigate replace to={"quitequote"} />} ></Route> 
        <Route path="quitequote" element={<Header />}>
          <Route path="quitequote" element={<Main content={content} />}></Route>
          <Route path="home" element={<Main content={content} />}></Route>
          {/* <Route path={"/"} element={<Navigate replace to={"/QuiteQuote"} />} ></Route> */}
          <Route path="information" element={<Information />}></Route>
          <Route path="discover" element={<Discover />} />
          <Route path='/discover/love' element={<TopicsPages topicImg={sourceLove} topic={'Love'} viewerTopic={'Love_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />}>
            <Route path={"/discover/love"} element={<Navigate replace to={"/discover/love/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Love_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
          <Route path='/discover/happy' element={<TopicsPages topicImg={sourceHappy} topic={'Happy'} viewerTopic={'Happy_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />} >
            <Route path={"/discover/happy"} element={<Navigate replace to={"/discover/happy/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Happy_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
          <Route path='/discover/sad' element={<TopicsPages topicImg={sourceSad} topic={'Sad'} viewerTopic={'Sad_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />} >
            <Route path={"/discover/sad"} element={<Navigate replace to={"/discover/sad/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Sad_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
          <Route path='/discover/fun' element={<TopicsPages topicImg={sourceFun} topic={'Fun'} viewerTopic={'Fun_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />} >
            <Route path={"/discover/fun"} element={<Navigate replace to={"/discover/fun/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Fun_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
          <Route path='/discover/family' element={<TopicsPages topicImg={sourceFamily} topic={'Family'} viewerTopic={'Family_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />} >
            <Route path={"/discover/family"} element={<Navigate replace to={"/discover/family/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Family_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
          <Route path='/discover/motivation' element={<TopicsPages topicImg={sourceMotiv} topic={'Motivational'} viewerTopic={'Motivational_quotes'} list={content} clickToClose={clickToClose} toogleTopicBoxDisplay={toogleDisplay} />} >
            <Route path={"/discover/motivation"} element={<Navigate replace to={"/discover/motivation/recent"} />} />
            <Route path='all' element={<TopicPageAll content={content} topic={'Motivational_quotes'} onClick={clickToClose} />} />
            <Route path='recent' element={<TopicPageRecent />} />
          </Route>
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;

