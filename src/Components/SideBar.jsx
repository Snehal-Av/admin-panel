import React from 'react'
import './SideBar.css'
import {
  LineStyle, Timeline, TrendingUp, PersonOutline, Inventory, AttachMoney, Assessment, LocalPostOfficeOutlined, ForumOutlined,
  ChatBubbleOutlineOutlined, WorkOutlineOutlined, NewReleases
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <Link to='/' className='link'>
            <ul className="sideBarItem active">
              <LineStyle className='sidebarIcons' />
              Home
            </ul>
          </Link>
          <ul className="sideBarItem">
            <Timeline className='sidebarIcons' />
            Analytics
          </ul>
          <ul className="sideBarItem">
            <TrendingUp className='sidebarIcons' />
            Sales
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <Link to='/users' className='link'>
            <ul className="sideBarItem active">
              <PersonOutline className='sidebarIcons' />
              Users
            </ul>
          </Link>
          <Link to='products' className='link'>
            <ul className="sideBarItem">
              <Inventory className='sidebarIcons' />
              Products
            </ul>
          </Link>

          <ul className="sideBarItem">
            <AttachMoney className='sidebarIcons' />
            Transactions
          </ul>
          <ul className="sideBarItem">
            <Assessment className='sidebarIcons' />
            Reports
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarItem active">
            <LocalPostOfficeOutlined className='sidebarIcons' />
            Mail
          </ul>
          <ul className="sideBarItem">
            <ForumOutlined className='sidebarIcons' />
            FeedBack
          </ul>
          <ul className="sideBarItem">
            <ChatBubbleOutlineOutlined className='sidebarIcons' />
            Message
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarItem active">
            <WorkOutlineOutlined className='sidebarIcons' />
            Manage
          </ul>
          <ul className="sideBarItem">
            <Timeline className='sidebarIcons' />
            Analytics
          </ul>
          <ul className="sideBarItem">
            <NewReleases className='sidebarIcons' />
            Reports
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar