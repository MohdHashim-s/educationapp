import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
const handleClick=()=>{
  window.scrollTo(0,0)
}
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Edumart</h2>
            </div>
            <p>
              Embarance the future of innovation and techynology
              <br /> with our cutting-edge tech bussiness solutions
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to='/courses' onClick={handleClick}>Our programs</Link> 
              </li>
              <li>
                <Link to='/services' onClick={handleClick}>Our plan</Link>
              </li>
              <li>
                <a href="">Become a member</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Quick links</h4>
            <ul className="footer_links">
              <li>
                <Link to='/aboutus' onClick={handleClick}>About us</Link>
              </li>
              <li>
                <Link to='/contactus' onClick={handleClick}>Contact us</Link>
              </li>
              <li>
                <Link to='/support' onClick={handleClick}>Support us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;