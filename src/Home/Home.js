import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home" style={{"margin-top" : "150px"}}>
        <div className="lander">
          <h1 style={{"textAlign" : "centre", "color" : "green"}}>Corona Virus</h1>
          <p style={{fontSize : 25}}>Things you might need to know</p>
          <img src="co1.gif" alt="cv" align="centre" width="300px" height="300px" style={{"margin-top":"6%"}}></img>
        </div>
      </div>
    );
  }
}