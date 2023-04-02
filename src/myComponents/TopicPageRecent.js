import React from 'react'

export const TopicPageRecent = (props) => {

  let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

  return (
    
      <div className="init-line">
        <p style={{color: darkMode?'white':'black'}}>Sorry! No Quotes to display</p>
      </div>

    
  )
}
