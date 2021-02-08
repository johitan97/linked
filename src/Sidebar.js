import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";
import fondo from './img/fondo.jpg';

function Sidebar() {
    
    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
          <span className="sidebar_hash">#</span>
          <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
           <div className="sidebar_top">
               <img src={fondo} alt=""/>
               <Avatar className="sidebar_avatar" />
               <h2>Johan Rodriguez Morales</h2>
               <h4>Soy un desarrollador front-end en enfasis en areas como React JS</h4>
           </div>

           <div className="sidebar_stats">
              <div className="sidebar_stat"> 
                 <p>Quienes te han Visto</p>
                 <p className="sidebar_statNumber"> 
                    2,543
                 </p>
              </div>
              <div className="sidebar_stat"> 
              <p>Vistas por publicacion</p>
                 <p className="sidebar_statNumber"> 
                    2,400
                 </p>
              </div>
           </div>

           <div className="sidebar_botton">
               <p>Recientes</p>
               {recentItem('reactjs')}
               {recentItem('programacion')}
               {recentItem('Ingenieria de software')}
               {recentItem('Diseño')}
               {recentItem('Desarrollo')}
           </div>
        </div>
    )
}

export default Sidebar
