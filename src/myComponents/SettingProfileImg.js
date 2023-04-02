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

  const afterUploadButtonHandler = () =>{
    props.changeProfileImg(image);
    props.clickToClose();
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
      <div className="profile-img-upload-box-background">
        <div className="profile-img-upload-box" style={{backgroundColor: darkMode?'#35363a':'white'}}>
          <div className="profile-img-upload-box-heading" style={{color: darkMode?'white':'black'}}>
            <h3>Change your Profile image</h3>
          </div>
          <div className="uploaded-img-preview-box">
            {image?<img src={image} alt="" className="uploaded-img" />
            :
            <p style={{color: darkMode?'white':'black'}}>Preview</p>}
          </div>
          <div className="profile-img-upload-btn-zone">
            <form action="" className="set-profile-img">
              <label htmlFor="inputTag">
                <input type="file" multiple accept='image/*' id='inputTag' className='upload-profile-input' onChange={handleChange} />
                <div className='profile-img-upload-btn'>{!afterUpload?'Upload':'Change'}</div>
              </label>
            </form>
            {afterUpload&&<div className='profile-img-upload-btn' onClick={afterUploadButtonHandler}>Confirm</div>}
            <button className="profile-img-upload-cancel-btn" onClick={props.clickToClose} style={{color: darkMode?'white':'black'}}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

