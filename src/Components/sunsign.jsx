import React, {Component} from "react";
import './sunsign.css'

class Sunsign extends Component{
    Sign = {sun: ["Aries"," Taurus"," Gemini"," Cancer"," Leo"]};

    render() {
        return (
            <div className="home"><span style={{fontSize: 30, color: "burlywood"}}><h1>What's Your Sun Sign? </h1>
        </span><span>{this.Sign.sun}</span></div>);
    }


}


export default Sunsign;