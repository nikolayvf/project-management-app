import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="PhysioFix Logo" />
          <p>
            Мисията на Physio Fix е да помогнем на всеки един пациент, който се
            бори с болката и иска да си върне нормалния начин на живот.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Свържи се с нас</h3>
          <p>
            <FiMapPin /> гр.Пловдив, ул.Севастопол 19
          </p>
          <p>
            <FiMail />{" "}
            <a href="mailto:physiofix21@gmail.com">physiofix21@gmail.com</a>
          </p>
          <p>
            <FiPhone /> <a href="tel:0884025333">088 402 5333</a>
          </p>
          <p>Понеделник - Събота</p>
        </div>
        <div className="footer-hours">
          <h3>Работно време</h3>
          <p>
            <span>Понеделник - Петък:</span> 08:00 - 18:00
          </p>
          <p>
            <span>Събота:</span> 09:00 - 17:00
          </p>
          <p>
            <span>Неделя:</span> 09:00 - 15:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
