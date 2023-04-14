import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const SettingsSavedContents = () => {

    let saveContentList;
    if (localStorage.getItem('saveContentList') === null) {
        saveContentList = [];
    }
    else {
        saveContentList = JSON.parse(localStorage.getItem('saveContentList'));
    }

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
            <title>
                Quite Quote - Saved Contents
            </title>
        </Helmet>
            <main className="main-content" style={{height: '100vh' ,backgroundColor: darkMode?'#202124':'white'}}>
                <div className="saved-contents-container">
                    <div className="settings-pages-heading" style={{color: darkMode?'white':'black'}}>
                        <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{ color: darkMode ? 'white' : 'black' }}>
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </Link>
                        <h1>Saved Contents</h1>
                    </div>
                    <div className="saved-content-number"><p style={{color: darkMode?'white':'black'}}>Total {saveContentList.length} content{saveContentList.length>1&&'s'} found in your feed</p></div>
                    <div className="saved-contents">
                        <ul>
                            {saveContentList.length > 0 ? saveContentList.map((item, index) => {
                                return <li key={index}><img src={item} alt="" draggable={false} /></li>
                            }) :
                                <p className='no-saved-content-para' style={{color: darkMode?'white':'black'}}>No saved contents to display</p>}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}
