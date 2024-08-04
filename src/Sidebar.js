import React,{useState} from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
function Sidebar({name,email}) {

 

const recentItem=(topic)=>{

  return <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
  </div>

}





  return (
    <div className='sidebar'>
      <div className="sidebar__top">

<img src="https://th.bing.com/th/id/R.0fe3d1ade7cc0cc651fa671ab4418b31?rik=KjzXcWc4qgVIaQ&pid=ImgRaw&r=0" alt="" />
<Avatar className='sidebar__avatar'/>
<h2>{name}</h2>
<h4>{email}</h4>
      </div>


<div className="sidebar__stats">
    <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statnumber">2,543</p>
    </div>

    <div className="sidebar__stat">
        <p>viewes on post</p>
        <p className="sidebar__statnumber">2,433</p>
    </div>

</div>


<div className="sidebar__bottom">
    <p>Recent</p>
    {recentItem('programming')}
    {recentItem('reactjs')}
    {recentItem('mernstack')}
    {recentItem('app development')}
</div>

    </div>
  )
}

export default Sidebar
