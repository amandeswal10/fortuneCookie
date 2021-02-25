import React, {Component} from "react";
import './sunsign.css'
import aries from '../Aries_logo.png';
import taurus from '../Taurus_logo.png';
import gemini from '../gemini_logo.png'

    class Sunsign extends Component {

        allSigns = {Aries: {img: aries, name: "Aries"},Taurus: {img:taurus, name: "Taurus"},Gemini:{name:"Gemini", img: gemini} }

        render() {
            return (
                <div>


                    <div className="home"><h1>What's Your Sun Sign? </h1></div>
                    <div className="container">
                        <ul className="logos">
                            <li><img src={aries} alt="Aries" className="image"/></li>
                            <li><img src={taurus} alt="Taurus" className="image"/></li>
                            <li><img src={gemini} alt={"Gemini"} className="image"/></li>
                        </ul>
                    <div className="middle">
                        <div className="text">{this.allSigns.Aries.name}</div>

                    <div className="text">{this.allSigns.Taurus.name}</div>

                                <div className="text">{this.allSigns.Gemini.name}</div> </div></div>

                </div>



            );
        }
    }


export default Sunsign;