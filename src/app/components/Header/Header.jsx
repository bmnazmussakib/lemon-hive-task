"use client"
import React, { useState } from "react";
import "./header.scss";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    // Icon Toggler
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav-brand">
        <img src="/img/logo.png" alt="" />
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="#" className="nav__link">
            About us
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav__link">
            What we do
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav__link">
            Our work
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav__link">
            blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav__link">
            Say hi
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;