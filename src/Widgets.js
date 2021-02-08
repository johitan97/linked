import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";

function Widgets(){
    const newsArticle = (heading,subtitle) => {
        <div className="widgets_article">
            <div className="widgets_articleleft">

            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
}

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_header">
               <h2>Noticias de LinkedInNews</h2>
               <InfoIcon />
            </div>
        </div>
    )
}

export default Widgets
