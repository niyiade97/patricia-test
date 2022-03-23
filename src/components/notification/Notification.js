import React from 'react'
import "./Notification.css";
import { IoIosNotifications } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import profileImg from '../../assets/images/profileImg.svg';

function notification() {
  return (
    <div className='notification-container'>
        <div className='notification-inner-container'>
            <div className='notification-wrapper'>
                <i className='notification-icon'>
                    {<IoIosNotifications />}
                    <div className='notification-status'>
                        <div className='notification-status-inner-wrapper'></div>
                    </div>
                </i>
            </div>
            <div className='notification-wrapper'>
                <img src={profileImg} alt="profile-Img" className='notification-profile-img' />
            </div>
                <i className='notification-option-icon'>{<BiDotsVerticalRounded />}</i>
        </div>
    </div>
  )
}

export default notification
