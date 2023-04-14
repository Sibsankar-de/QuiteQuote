import React, { useState, useContext } from 'react';
import { InnerContent } from './InnerContent';
import searchResultcontext from '../contexts/SearchResultContext';

export const SearchResultPage = (props) => {


    const results = props.resultList;
    const [showNumber, setShowNumber] = useState(2);
    const [imgShowNumber, setImgShowNumber] = useState(2);
    const moreBtnClickHandler = () => {
        if (showNumber === 2) {
            setShowNumber(results.length);
        }
        else {
            setShowNumber(2);
        }
    }

    const resultImgMaker = (content) => {
        const resultImgList = [];
        for (let i in content) {
            for (let j of content[i].suggestionImg) {
                resultImgList.push(j);
            }
        }
        return resultImgList;
    }


    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <div className="search-result-page-container">
            <div className="search-result-page-head" style={{ backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div className="search-reult-page-bar" onClick={props.searchResultBarClickHandler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>{props.searchRef}</div>
            </div>
            <div className="search-result-page-main">
                {results.length > 0 ? <div>
                    <div className="search-result-details-heading" style={{ color: darkMode ? 'white' : 'black' }}>
                        <h2>Total {(results.length + resultImgMaker(results).length)} result{(results.length + resultImgMaker(results).length) > 1 && 's'} found on your search - "{props.searchRef}"</h2>
                    </div>
                    <div className="search-results">
                        <ul className='search-result-ul'>
                            <h3 style={{ color: darkMode ? 'white' : 'black' }}>From Discover</h3>
                            <div className="result-list">
                                {results.map((item, index) => {
                                    return index <= showNumber && <li key={index}><a href={item.link} style={{ color: darkMode ? 'white' : 'black' }}>{item.searchName}</a><button className="search-suggestion-copy-btn" style={{ color: darkMode ? 'white' : 'black' }}><svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></button></li>
                                })}
                            </div>
                            {results.length > 3 && <button className='result-more-btn' onClick={moreBtnClickHandler} style={{ color: darkMode ? 'white' : 'black' }}>{showNumber === 2 ? 'more' : 'less'}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={showNumber === 2 ? 'more-btn' : 'more-btn-svg-clicked'}>
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></button>}
                        </ul>
                        <ul className="search-result-ul">
                            <h3 style={{ color: darkMode ? 'white' : 'black' }}>From your Feed</h3>
                            <div className="result-list">
                                {resultImgMaker(results).map((img, index) => {
                                    return index <= imgShowNumber && <li key={index}><img className='search-result-img' src={img} alt="" /></li>
                                })}
                            </div>
                            {resultImgMaker(results).length > 3 && <button className='result-more-btn' onClick={()=>imgShowNumber===2?setImgShowNumber(results.length):setImgShowNumber(2)} style={{ color: darkMode ? 'white' : 'black' }}>{imgShowNumber === 2 ? 'more' : 'less'}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={imgShowNumber === 2 ? 'more-btn' : 'more-btn-svg-clicked'}>
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></button>}
                        </ul>
                    </div>
                </div> :
                    <div className='search-result-not-found-box' style={{ color: darkMode ? 'white' : 'black' }}>
                        <h2>No result found on your search -</h2>
                        <h2>"{props.searchRef}"</h2>
                    </div>}
            </div>
        </div>
    )
}


