import React from 'react'
import SideBar from '../../../components/sideBar/SideBar'
import "./DashboardLayout.css";

function DashboardLayout(props) {
  return (
    <div className='dashboard-container'>
        <div className='sidebar-container'>
            <SideBar />
        </div>
        <div className='dashboard-body'>
            {props.children}
        </div>
    </div>
  )
}

export default DashboardLayout;