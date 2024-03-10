import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import { MainCarousel } from "./mainCarousel.js";

export default function Home() {

  return (
        <div className='home-content'>
          <MainCarousel/>
          <Outlet/>
          <div className='brandLogos'>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/briggsLogo.png")}
                alt="briggsLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/craftsmenLogo.png")}
                alt="craftsmenLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/echoLogo.png")}
                alt="echoLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/hondaLogo.png")}
                alt="hondaLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/husqvarnaLogo.png")}
                alt="husqvarnaLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/kawasakiLogo.png")}
                alt="kawasakiLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/kohlerLogo.png")}
                alt="kohlerLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/MTDlogo.png")}
                alt="MTDlogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/oregonLogo.png")}
                alt="oregonLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/poulanLogon.png")}
                alt="poulanLogon"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/redmaxLogo.png")}
                alt="redmaxLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/rotaryLogo.png")}
                alt="rotaryLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/shindaiwaLogo.png")}
                alt="shindaiwaLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/toroLogo.png")}
                alt="toroLogo"
              />
            </div>
            <div className='logo'>
              <img
                className="logoImage"
                src={require("./images/brandLogos/yazooLogo.png")}
                alt="yazooLogo"
              />
            </div>
          </div>
        </div>
        )
}