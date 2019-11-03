import React,{Component,Fragment} from "react";

//Static Files

import "../styles/Header.css";
import Background from "../img/headerBackground.jpg";

export default class Header extends Component{
  render(){
    return(
      <Fragment>
        <section id="header" style={{background: `#12181b`}}>
         <div className="containers">
          <h1 className="heading text-center pt-4">Contact</h1>
         </div>
        </section>
      </Fragment>
    )
  }
}