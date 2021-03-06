import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from "./InputOption";
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SharetOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post_header">
              <Avatar />
              <div className="post_info">
                <h2>{name}</h2>
                <p>{description}:</p>
              </div>
            </div>
            <div className="post_body"> 
                <p>{message}</p>
            </div>

            <div className="post_buttons">
               <InputOption Icon={ThumbUpAltOutlinedIcon} title="Me gusta" color="gray" />
               <InputOption Icon={ChatOutlinedIcon} title="Comentario" color="gray" />
               <InputOption Icon={SharetOutlinedIcon} title="Compartir" color="gray" />
               <InputOption Icon={SendOutlinedIcon} title="Enviar" color="gray" />
            </div>
        </div>
    )
}

export default Post

