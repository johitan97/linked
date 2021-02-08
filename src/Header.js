import React from 'react';
import './Header.css';
import linkedin from './img/linkedin.png';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(){
    return(
       <div className="header">
          <div className="header_left">
              <img src={linkedin} alt ="" />
              <h1>Linkedin</h1>
          </div>
          <div className="header_search">
              <h2>Buscar</h2>
              <SearchIcon />
               <input type="text"/>
          </div>

          <div className="header_right">
              <HeaderOption Icon={HomeIcon} title='Home'/>
              <HeaderOption Icon={SupervisorAccountIcon} title="Mi red"/>
              <HeaderOption Icon={BusinessCenterIcon} title="Trabajo"/>
              <HeaderOption Icon={ChatIcon} title="Mensajes"/>
              <HeaderOption Icon={NotificationsIcon} title="Notificaciones"/>
              <HeaderOption  avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="yo"/>
          </div>
           
       </div>
    );
}
export default Header