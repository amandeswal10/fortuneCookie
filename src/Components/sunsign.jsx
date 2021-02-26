import React, {Component} from "react";
import './sunsign.css'
import aries from '../aries_logo.png';
import taurus from '../Taurus_logo.png';
import gemini from '../gemini_logo.png';
import cancer from '../cancer_logo.png';
import leo from '../leo_logo.png';
import virgo from '../virgo_logo.png';
import libra from '../libra_logo.png';

    class Sunsign extends Component {
        // list of all the sun signs , along with their properties
        link = "https://www.astrology.com/horoscope/daily/"
        allSigns = {Aries: {img: aries, name: "Aries", link: this.link+"aries.html"},
            Taurus: {img:taurus, name: "Taurus", link:this.link+"taurus.html"}
            ,Gemini:{name:"Gemini", img: gemini, link: this.link+ "gemini.html"},
            Cancer:{img:cancer, name:"Cancer",link: this.link+"cancer.html"},
            Leo:{img:leo, name:"Leo", link:this.link+"leo.html" },  Virgo: {img:virgo, name:"Virgo", link:this.link+"virgo.html" }
        , Libra : {img: libra, name: "Libra", link: this.link + "libra.html"}}

        render() {
            return (
                <div>
                    <div className="appHeader"><h1>Fortune Cookie</h1></div>
                    <div className="logos">

                    <ul>
                        <li><a href={this.allSigns.Aries.link} rel="noreferrer" target="_blank"><img src={aries} width={250} height={250} alt="Aries" /></a></li>
                        <li><a href={this.allSigns.Taurus.link} rel="noreferrer" target="_blank"><img src={taurus} width={250} height={250} alt="Taurus" /></a></li>
                        <li><a href={this.allSigns.Gemini.link} rel="noreferrer" target="_blank"><img src={gemini} width={250} height={250} alt="Gemini" /></a></li>
                        <li><a href={this.allSigns.Cancer.link} rel="noreferrer" target="_blank"><img src={cancer} width={250} height={250} alt="Cancer"/></a></li>
                        <li><a href={this.allSigns.Leo.link} rel="noreferrer" target="_blank"><img src={leo} width={250} height={250} alt="Cancer"/></a></li>
                        <li><a href={this.allSigns.Virgo.link}rel="noreferrer" target="_blank"><img src={virgo} width={250} height={250} alt="Virgo"/></a></li>
                        <li><a href={this.allSigns.Libra.link}rel="noreferrer" target="_blank"><img src={libra} width={250} height={250} alt="Libra"/></a></li>
                    </ul>
                    </div>


                </div>



            );
        }
    }


export default Sunsign;