import React,{Component,Fragment} from "react";

//Static Files

import "../styles/Header.css";
import Background from "../img/headerBackground.jpg";

export default class Header extends Component{
  render(){
    return(
      <Fragment>
        <section id="header" style={{backgroundImage: `url(${Background})`}}>
         <div className="containers">
          <h1 className="heading text-center pt-4">Welcome To VeeWeb Code</h1>
         </div>
        </section>
      </Fragment>
    )
  }
}