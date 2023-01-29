import React from 'react'
import { Link } from 'react-router-dom'

export const Addtopics = () => {
    return (
        <div className="oth-button-funcs">
            <div className="discover-button-funcs">
                <p id="discover-box-heading">Topics for You</p>
                <div className="topics">
                    <li><Link to={'/discover/love'}><img src={require("./img/interest_1.png")} draggable="false" alt="love" width="60px" />Love</Link>
                    </li>
                    <li><Link to={'/discover/happy'}><img src={require("./img/interest_2.png")} draggable="false" alt="happy_sign"
                        width="60px" />Happy</Link></li>
                    <li><Link to={'/discover/sad'}><img src={require("./img/interest_3.png")} draggable="false" alt="sad_sign"
                        width="60px" />Sad</Link></li>
                    <li><Link to={'/discover/fun'}><img src={require("./img/interest_4.png")} draggable="false" alt="fun_sign"
                        width="60px" />Funny</Link></li>
                    <li><Link to={'/discover/family'}><img src={require("./img/interest_5.png")} draggable="false" alt="family" width="60px" />With
                        Family</Link></li>
                    <li><Link to={'/discover/motivation'}><img src={require("./img/interest_6.png")} draggable="false" alt="motivation_sign"
                        width="60px" />Motivation</Link></li>
                </div>
            </div>
        </div>
    )
}
