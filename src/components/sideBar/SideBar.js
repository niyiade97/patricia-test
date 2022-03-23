import React from 'react'
import logo from "../../assets/images/logo.svg";
import mobileLogo from "../../assets/images/mobileLogo.svg";
import { sideBarData } from './navData';
import { NavLink, Link } from "react-router-dom"
import  "./SideBar.css";

function SideBar() {

  return (
    <div className='sidebar-wrapper'>
        <div className='nav-logo-wrapper'>
        <Link to="/">
          <img src={logo} alt="logo" className='sidebar-logo logo'/>
          <img src={mobileLogo} alt="logo" className='mobile-logo logo'/>
        </Link>
        </div>
        <div className='nav-wrapper'>
          <div className='nav-list-wrapper'>
            <ul className='nav-ul'>
              {
                sideBarData.map((data, index) =>{
                  return(
                    <li className={`${index + 1 === sideBarData.length ? "nav-li nav-li-help" : "nav-li"}`}>
                      <NavLink activeClassName="active" className='nav-link' to={data.path}>
                       <i className='nav-icon'>{<data.icon />}</i>
                         <p className='nav-text'>{data.text}</p>
                      </NavLink>
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

export default SideBar;