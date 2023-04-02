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
                        <Link to={'/settings'} className={'setting-page-back-btn'}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" style={{color: darkMode?'white':'black'}}/>
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
