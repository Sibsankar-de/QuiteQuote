import React, { useEffect, useRef, useState } from 'react'
import { SearchSuggestions } from './SearchSuggestions'
import { Helmet } from 'react-helmet';
import { SearchResultPage } from './SearchResultPage';

export const Search = (props) => {
    const searchInputRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [searchResultActiver, setSearchResultActiver] = useState(false);

    const suggestionCopyBtnClickHandler = (text) => {
        searchInputRef.current.value = text;
    }

    const searchBtnHandler = (e) => {
        e.preventDefault();
        if (searchResultActiver === false&&searchInput.length>0) {
            setSearchResultActiver(true);
        }
        else {
            setSearchResultActiver(false);
        }
    }

    useEffect(()=>{
        if(searchResultActiver){
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
        else{
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            window.scrollTo(0,0);
        }
    })

    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    useEffect(()=>{
        if(darkMode){
            document.getElementsByTagName('html')[0].style.backgroundColor = '#202124';
        }
        else{
            document.getElementsByTagName('html')[0].style.backgroundColor = 'white';
        }
    });

    return (
        <>
            <Helmet>
                <title>Quite Quote - Search</title>
            </Helmet>
            <main style={{ height: '100vh', backgroundColor: darkMode ? '#202124' : 'white' }}>
                <div className="main-content">
                    <div className="search-content-container">
                        <div style={{ display: searchResultActiver ? 'none' : 'inherit', }}>
                            <div className="search-box-heading" style={{ color: darkMode ? 'white' : 'black' }}>
                                <h1>Search</h1>
                            </div>
                            <div className="search-box">
                                <div className="search-box-bar" style={{ borderColor: darkMode ? 'white' : '#616263' }}>
                                    <form action="" onSubmit={searchBtnHandler}>
                                        <input type="search" autoFocus id="search-input" placeholder='Search here...' ref={searchInputRef} onChange={(e) => setSearchInput(e.target.value)} />
                                    </form>
                                    <button className="search-box-btn" onClick={searchBtnHandler} style={{ borderColor: darkMode ? 'white' : '#616263' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                        <div className={searchResultActiver?"search-result-box":"search-suggestion-box"}>
                            <h3 className="search-suggestion-box-heading" style={{ display: searchResultActiver ? 'none' : 'inherit', color: darkMode ? 'white' : 'black' }}>Suggestions</h3>
                            <SearchSuggestions content={props.content} searchInput={searchInput} suggestionCopyBtnClickHandler={suggestionCopyBtnClickHandler} searchHandler={searchBtnHandler} searchResultActiver={searchResultActiver} searchResultBarClickHandler={()=>setSearchResultActiver(false)}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
