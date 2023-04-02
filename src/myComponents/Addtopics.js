import React from 'react'
import { Link } from 'react-router-dom'

export const Addtopics = () => {

    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    return (
        <div className="oth-button-funcs">
            <div className="discover-button-funcs" style={{backgroundColor: darkMode?'#35363a':'white', borderColor: darkMode?'#262626':'#d0cccc'}}>
                <p id="discover-box-heading" style={{color: darkMode?'white':'black'}}>Topics for You</p>
                <div className="topics">
                    <li><Link to={'/discover/love'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_1.png")} draggable="false" alt="love" width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>Love</Link>
                    </li>
                    <li><Link to={'/discover/happy'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_2.png")} draggable="false" alt="happy_sign"
                        width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>Happy</Link></li>
                    <li><Link to={'/discover/sad'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_3.png")} draggable="false" alt="sad_sign"
                        width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>Sad</Link></li>
                    <li><Link to={'/discover/fun'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_4.png")} draggable="false" alt="fun_sign"
                        width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>Funny</Link></li>
                    <li><Link to={'/discover/family'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_5.png")} draggable="false" alt="family" width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>With
                        Family</Link></li>
                    <li><Link to={'/discover/motivation'} style={{color: darkMode?'white':'black'}}><img src={require("./img/interest_6.png")} draggable="false" alt="motivation_sign"
                        width="60px" style={{borderColor: darkMode?'#ffffff7a':'#00000066'}}/>Motivation</Link></li>
                </div>
            </div>
        </div>
    )
}
