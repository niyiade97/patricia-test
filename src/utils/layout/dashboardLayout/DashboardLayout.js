import React from 'react'
import SideBar from '../../../components/sideBar/SideBar'
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className=''>
        <div className='sidebar-container'>
            <SideBar />
        </div>
        <div className='dashboard-body'>
            
        </div>
    </div>
  )
}

export default DashboardLayout;