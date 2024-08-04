import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

import { auth } from './firebase'
function HeaderOptions({avatar,Icon,title,link}) {

  const navigate = useNavigate();

const logoutUser = ()=>{
auth.signOut()
  localStorage.removeItem("linked_in_user")
navigate("/login")



}

  return (
    <div className='headerOption'>
      
{Icon && <Icon className='headerOption__icon'/>}
{avatar && <Avatar className='headerOption__icon' src={avatar}/>}
{link ? (<button onClick={logoutUser} className="headerOption__logout" type="submit">Logout</button>) : (<h3 className='headerOption__title'>{title}</h3>) }



    </div>
  )
}

export default HeaderOptions
