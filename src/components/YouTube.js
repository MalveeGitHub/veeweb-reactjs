import React,{Component,Fragment} from "react";

//Static Files
import "../styles/Base.css";
import Background from "../img/headerBackground.jpg";

export default class YouTube extends Component{
  render(){
    return(
      <Fragment>
        <section id="baseSection" style={{backgroundImage: `url(${Background})`}}>
         <div className="container">
          <h1>YouTube</h1>
         </div>
        </section>
      </Fragment>
    )
  }
}