import React, { useEffect, useState } from 'react'

export const SettingProfileName = (props) => {

    let user_name;
    if (localStorage.getItem('userName')===null){
        user_name = '';
    }
    else {
        user_name = localStorage.getItem('userName');
    }

    const [userName, setUserName] = useState(user_name);
    const [error, setError] = useState(false);
    const [cancelEdit, setCancelEdit] = useState(true);

    useEffect(() => {
        if (userName.length > 0) {
            setCancelEdit(false);
        }
        else setCancelEdit(true);
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.trim().length >= 4 && userName.trim().length <= 12) {
            props.updateUserName(userName.trim());
            localStorage.setItem('userName', userName);
            setUserName('');
        }
        else if (userName.trim().length === 0) {
            setError(true);
            setUserName('');
        }
        else { setError(true) }
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
            <div className="user-name-box">
                <form action="" className="user-name-change" onSubmit={handleSubmit}>
                    <div className="name-change-box">
                        <p>@</p>
                        <input type="text" className='user-name-input' placeholder='user_name' onChange={e => setUserName(e.target.value)} defaultValue={user_name} style={{borderBottomColor: darkMode?'white':'black', color: darkMode?'white':'black'}}/>
                        {!cancelEdit ? <button className="set-user-name-btn" onClick={handleSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </button> :
                            <button className="set-user-name-btn" onClick={props.cancelEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>}
                    </div>
                </form>
                {error && <div className="user-name-error">
                    <p className="error-para">Username must between 4-12</p>
                </div>}
            </div>
        </>
    )
}
