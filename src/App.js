import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Patreon from "./components/Patreon";
import YouTube  from "./components/YouTube";
import Contact from "./components/Contact";

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Nav  />
          <Route path="/" exact component={Header} />
          <Route path="/about" exact component={About} />
          <Route path="/patreon" exact component={Patreon} />
          <Route path="/youtube" exact component={YouTube} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Router>
    );
  }
 
}

export default App;
