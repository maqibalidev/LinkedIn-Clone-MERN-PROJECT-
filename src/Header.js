import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import img from "./linkedin.png"
import  "./Header.css"
import HeaderOptions from './HeaderOption';

 import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcons from '@mui/icons-material/Notifications';


function Header() {



  return (
    <div className='header'>

<div className="header__left">

<img src={img} alt="" />

<div className="header__search" p>

<SearchIcon/>

<input type="text" placeholder='Search'/>
</div>

</div>


<div className="header__right">

  <HeaderOptions Icon={HomeIcon}  title="Home"/>
  <HeaderOptions Icon={SupervisorAccount}  title="My Network"/>
  <HeaderOptions Icon={BusinessCenterIcon}  title="Jobs"/>
  <HeaderOptions Icon={ChatIcon}  title="Messaging"/>
  <HeaderOptions Icon={NotificationsIcons}  title="Notifications"/>
  <HeaderOptions avatar="https://media.gettyimages.com/photos/how-amazing-is-this-picture-id1216414557?s=612x612"  title="Me"/>
  <HeaderOptions link= {true} title="Logout"/>

</div>
    </div>
  )
}

export default Header
