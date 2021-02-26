import React, {Component} from "react";
import './sunsign.css'
import aries from '../aries_logo.png';
import taurus from '../Taurus_logo.png';
import gemini from '../gemini_logo.png';
import cancer from '../cancer_logo.png';
import leo from '../leo_logo.png';
import virgo from '../virgo_logo.png';
import libra from '../libra_logo.png';
import scorpio from '../scorpio_logo.png';
import sagittarius from '../sagittarius_logo.png';
import capricorn from '../capricorn_logo.png';
import aquarius from '../aquarius_logo.png';
import pisces from '../pisces_logo.png'
import cookie from '../fortune_cookie.png';
import logo from '../fortune_logo.png';






    class Sunsign extends Component {

        link = "https://www.astrology.com/horoscope/daily/"

        allSigns = {Aries: {img: aries, name: "Aries", link: this.link+"aries.html"},
            Taurus: {img:taurus, name: "Taurus", link:this.link+"taurus.html"}
            ,Gemini:{name:"Gemini", img: gemini, link: this.link+ "gemini.html"},
            Cancer:{img:cancer, name:"Cancer",link: this.link+"cancer.html"},
            Leo:{img:leo, name:"Leo", link:this.link+"leo.html" },  Virgo: {img:virgo, name:"Virgo", link:this.link+"virgo.html" }
        , Libra : {img: libra, name: "Libra", link: this.link + "libra.html"},
        Scorpio: {img:scorpio, name: "Scorpio", link: this.link + "scorpio.html"},
        Sagittarius: {img: sagittarius,name: "Sagittarius", link: this.link + "sagittarius.html" },
            Capricorn: {img: capricorn,name: "Capricorn", link: this.link + "capricorn.html" },
            Aquarius: {img: aquarius,name: "Aquarius", link: this.link + "aquarius.html" },
            Pisces: {img: pisces,name: "Pisces", link: this.link + "pisces.html" }}


        render() {
            return (
                <div className="home">
                    <div className="appHeader"><img src={logo} width={175} height={100} alt="fortune cookie logo"/>
                    <h1>Fortune Cookie</h1></div>
                    <h2>Chose Your Sign</h2>
                    <div className="logos">


                    <ul>
                        <li><a href={this.allSigns.Aries.link} rel="noreferrer" target="_blank">
                            <img src={aries} width={200} height={200} alt="Aries" />
                            <span className="caption">Aries</span></a></li>
                        <li><a href={this.allSigns.Taurus.link} rel="noreferrer" target="_blank">
                            <img src={taurus} width={200} height={200} alt="Taurus" />
                            <span className="caption">Taurus</span></a></li>
                        <li><a href={this.allSigns.Gemini.link} rel="noreferrer" target="_blank">
                            <img src={gemini} width={200} height={200} alt="Gemini" />
                            <span className="caption">Gemini</span></a></li>
                        <li><a href={this.allSigns.Cancer.link} rel="noreferrer" target="_blank">
                            <img src={cancer} width={200} height={200} alt="Cancer"/>
                            <span className="caption">Cancer</span></a></li>
                        <li><a href={this.allSigns.Leo.link} rel="noreferrer" target="_blank">
                            <img src={leo} width={200} height={200} alt="Cancer"/>
                            <span className="caption">Leo</span></a></li>
                        <li> <a href={this.allSigns.Virgo.link} rel="noreferrer" target="_blank">
                            <img src={virgo} width={200} height={200} alt="Virgo"/>
                            <span className="caption">Virgo</span></a></li>
                        <li> <a href={this.allSigns.Libra.link} rel="noreferrer" target="_blank">
                            <img src={libra} width={200} height={200} alt="Libra"/>
                            <span className="caption">Libra</span></a></li>
                        <li> <a href={this.allSigns.Scorpio.link} rel="noreferrer" target="_blank">
                            <img src={scorpio} width={200} height={200} alt="Scorpio"/>
                            <span className="caption">Scorpio</span></a></li>
                        <li><a href={this.allSigns.Sagittarius.link} rel="noreferrer" target="_blank">
                            <img src={sagittarius} width={200} height={200} alt="Sagittarius"/>
                            <span className="caption">Sagittarius</span></a></li>
                        <li><a href={this.allSigns.Capricorn.link} rel="noreferrer" target="_blank">
                            <img src={capricorn} width={200} height={200} alt="Capricorn"/>
                            <span className="caption">Capricorn</span></a></li>
                        <li><a href={this.allSigns.Aquarius.link} rel="noreferrer" target="_blank">
                            <img src={aquarius} width={200} height={200} alt="Aquarius"/>
                            <span className="caption">Aquarius</span></a></li>
                        <li><a href={this.allSigns.Pisces.link} rel="noreferrer" target="_blank">
                            <img src={pisces} width={200} height={200} alt="Pisces"/>
                            <span className="caption">Pisces</span></a></li>
                    </ul>
                    </div>


                </div>



            );
        }

    }


export default Sunsign;