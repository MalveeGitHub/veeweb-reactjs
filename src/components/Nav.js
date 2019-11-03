import React,{ Fragment, Component } from "react";
import "../styles/Nav.css";
import ReactTooltip from 'react-tooltip'


import { Route, Link } from "react-router-dom";

//IMAGES
import videoCamera from "./img/youtube.svg";
import homepage from "./img/homepage.svg";
import aboutUs from "./img/about-us.svg";
import donation from "./img/donation.svg";
import contact from "./img/contact.svg";

export default class Nav extends Component{

  render(){
    return(
      <Fragment>
        
        <nav className="sidenav">

          <div className="item">
             <Link data-tip="HOME" to="/"><img src ={homepage}></img></Link>
          </div>
          <div className="item">
            <Link data-tip="ABOUT US" to="/about"><img src ={aboutUs}></img></Link>
          </div>
          <div className="item">
              <Link data-tip="VIDEO TUTORIALS" to="/youtube"> <img src ={videoCamera}></img> </Link>
          </div>
          <div className="item">
           <Link data-tip="DONATE AT PATREON" to="/patreon"><img src ={donation}></img></Link>
          </div>
          <div className="item">
           <Link data-tip="CONTACT US" to="/youtube"><img src ={contact}></img></Link>
          </div>
          <ReactTooltip />
        </nav>
       
      </Fragment>
    );
  }
}