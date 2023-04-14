import React, { useState } from 'react'

export const SettingProfileImg = (props) => {


  let user_img;
  if (localStorage.getItem('userImg') === null) {
    user_img = null;
  }
  else {
    user_img = JSON.parse(localStorage.getItem('userImg'));
  }

  const [image, setImage] = useState(null);
  const [afterUpload, setAfterUpload] = useState(false);

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setAfterUpload(true);
  }

  const afterUploadButtonHandler = () => {
    props.changeProfileImg(image);
    props.clickToClose();
  }

  const removeButtonHandler = () => {
    localStorage.setItem('userImg', null);
    props.clickToClose();
    window.location.reload();
  }

  let darkMode;
  if (localStorage.getItem('isDarkMode') === null) {
    darkMode = false;
  }
  else {
    darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  }


  return (
    <>
      <div className="profile-img-upload-box-background">
        <div className="profile-img-upload-box" style={{ backgroundColor: darkMode ? '#35363a' : 'white' }}>
          <div className="profile-img-upload-box-heading" style={{ color: darkMode ? 'white' : 'black' }}>
            <h3>Change your Profile image</h3>
          </div>
          <div className="uploaded-img-preview-box">
            {image ? <img src={image} alt="" className="uploaded-img" />
              :
              <div className="img-preview-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-grid-3x3" viewBox="0 0 16 16" style={{ color: darkMode ? 'black' : '#afaeae' }}>
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"/>
                </svg>
                <p style={{ color: darkMode ? 'white' : 'black' }}>Preview</p>
              </div>}
          </div>
          <div className="profile-img-upload-btn-zone">
            {user_img !== null && !afterUpload && <div className='profile-img-upload-btn' onClick={removeButtonHandler}>Remove</div>}
            <form action="" className="set-profile-img">
              <label htmlFor="inputTag">
                <input type="file" multiple accept='image/*' id='inputTag' className='upload-profile-input' onChange={handleChange} />
                <div className='profile-img-upload-btn'>{!afterUpload ? 'Upload' : 'Change'}</div>
              </label>
            </form>
            {afterUpload && <div className='profile-img-upload-btn' onClick={afterUploadButtonHandler}>Confirm</div>}
            <button className="profile-img-upload-cancel-btn" onClick={props.clickToClose} style={{ color: darkMode ? 'white' : 'black' }}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

