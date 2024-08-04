import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({name,description,photoUrl ,message}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar/>
        <div className="post__info">
            <h2>M Aqib</h2>
            <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

<div className="post__buttons">
    <InputOption Icon={ThumbUpOutlinedIcon} title="Like"/>
    <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
    <InputOption Icon={ShareOutlinedIcon} title="Share"/>
    <InputOption Icon={SendOutlinedIcon} title="Send"/>
</div>

    </div>
  )
}

export default Post
