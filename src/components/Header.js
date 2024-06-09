import React from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // Make sure to place your logo in the src/assets directory

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PhysioFix Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Начало</a>
          </li>
          <li>
            <a href="/services">Услуги</a>
          </li>
          <li>
            <a href="/prices">Цени</a>
          </li>
          <li>
            <a href="/contacts">Контакти</a>
          </li>
          <li>
            <a href="/book">Запазете час</a>
          </li>
          <li>
            <a href="/blog">Блог</a>
          </li>
          <li>
            <a href="/gallery">Галерия</a>
          </li>
          <li className="language">
            <a href="/bg">BG</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
