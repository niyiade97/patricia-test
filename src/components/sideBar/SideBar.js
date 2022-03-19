import React from 'react'
import logo from "../../assets/images/logo.svg";
import { MdSpaceDashboard, MdOutlineHelp } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';
import { FiActivity } from 'react-icons/fi';
import { SiCodesandbox } from 'react-icons/si';
import { IoGiftSharp } from 'react-icons/io5';
import  "./SideBar.css";

function SideBar() {

  const sideBarData = [
    {
      icon: MdSpaceDashboard,
      text: "Dashboard",
      path: "/"
    },
    {
      icon: FiActivity,
      text: "Activity",
      path: "/"
    },
    {
      icon: GiWallet,
      text: "Wallet",
      path: "/"
    },
    {
      icon: SiCodesandbox,
      text: "Products",
      path: "/"
    },
    {
      icon: IoGiftSharp,
      text: "Referrals",
      path: "/"
    },
    {
      icon: MdOutlineHelp,
      text: "Help Center",
      path: "/"
    }
  ]
  return (
    <div className='sidebar-wrapper'>
        <div className='nav-logo-wrapper'>
          <img src={logo} alt="logo" className='sidebar-logo'/>
        </div>
        <div className='nav-wrapper'>
          <div className='nav-list-wrapper'>
            <ul className='nav-ul'>
              {
                sideBarData.map((data, index) =>{
                  return(
                    <li className={`${index + 1 === sideBarData.length ? "nav-li nav-li-help" : "nav-li"}`}>
                      <i className='nav-icon'>{<data.icon />}</i>
                      <p className='nav-text'>{data.text}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SideBar