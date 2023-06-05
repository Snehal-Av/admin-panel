import React from 'react'
import './topBar.css'
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

const TopBar = () => {
  return (
    <div className='topbar'>
        <div className='topbar_wrapper'>
            <div className='top_left'>
                <div className='logo'>admin</div>
            </div>
            <div className='top_right'>
                <div className='topbarIconContainer'>
                <NotificationsNone/>
                </div>
                <div className='topbarIconContainer'>
                <Language/>
                </div>
                <div className='topbarIconContainer'>
                <Settings/>
                </div>
                <img src='https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=180' className='topAvtar'></img>
            </div>
        </div>
    </div>
  )
}

export default TopBar