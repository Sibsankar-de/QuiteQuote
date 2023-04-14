import React, { useEffect, useState, createContext } from 'react'
import { SearchResultPage } from './SearchResultPage';

export const SearchSuggestions = (props) => {

    function insertAtIndex(str, substring, index) {
        return str.slice(0, index) + substring + str.slice(index);
    }

    const searchSuggestionMaker = (content) => {
        let suggestionList = [];
        let userName;
        let newUserName = '';
        for (let i in content) {
            userName = content[i].userName;
            userName = userName.split('');
            for (let j in userName) {
                if (userName[j] !== '_') {
                    newUserName += userName[j];
                }
            }
            for (let j in userName) {
                if (userName[j] === '_') {
                    newUserName = insertAtIndex(newUserName, ' ', userName.indexOf('_'));
                }
            }
            suggestionList.push(
                {
                    searchName: newUserName.toLowerCase(),
                    suggestionImg: content[i].feedElem,
                    link: content[i].link
                }
            )
            newUserName = '';
        }
        return suggestionList;
    }

    const [suggestionList, setSuggestionList] = useState([]);
    const searchInput = props.searchInput.toString().toLowerCase();
    const content = props.content;


    useEffect(() => {
        searchSuggestionMaker(content).map((item) => {
            if (item.searchName.toString().includes(searchInput) && !searchInput.includes(item)) {
                setSuggestionList([item, ...suggestionList]);
            }

            // if(item.toString().includes(searchInput)===false){
            //     suggestionList.splice(suggestionList.indexOf(item), 1);
            //     setSuggestionList(suggestionList);
            // }
            if (!searchInput) {
                setSuggestionList([]);
            }
        })
    }, [searchInput]);


    let darkMode;
    if (localStorage.getItem('isDarkMode') === null) {
        darkMode = false;
    }
    else {
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }


    return (
        <>
            {props.searchResultActiver ? <SearchResultPage searchRef={searchInput} resultList={suggestionList} searchResultBarClickHandler={props.searchResultBarClickHandler} content={props.content}/>
                :
                <ul className="search-suggestions">
                    {!searchInput && suggestionList.length === 0 && <p style={{ textAlign: 'center', color: darkMode ? 'white' : 'black' }}>Suggestions will appear here!</p>}
                    {searchInput && <li ><a href="#" style={{ color: darkMode ? 'white' : 'black' }}>{searchInput}</a></li>}
                    {suggestionList.map((item, index) => {
                        return (<li key={index}><a href={item.link} style={{ color: darkMode ? 'white' : 'black' }}>{item.searchName}</a>
                            <button className='search-suggestion-copy-btn' onClick={() => props.suggestionCopyBtnClickHandler(item.searchName)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16" style={{ transform: 'rotate(315deg)', color: darkMode ? 'white' : 'black' }}>
                                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                            </svg></button>
                        </li>)
                    })}
                </ul>}
        </>
    )
}
