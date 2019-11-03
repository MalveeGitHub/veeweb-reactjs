import React,{Component,Fragment} from "react";

//Static Files
import "../styles/Base.css";
import Background from "../img/headerBackground.jpg";

export default class Patreon extends Component{
  render(){
    return(
      <Fragment>
        <section id="baseSection" style={{backgroundImage: `url(${Background})`}}>
         <div className="container">
          <h1>Patreon</h1>
         </div>
        </section>
      </Fragment>
    )
  }
}