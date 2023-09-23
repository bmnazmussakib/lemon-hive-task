"use client"
import React, { useEffect, useState } from "react";
import "./header.scss";
import Link from "next/link";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const [scrolled, setScrolled] = useState(false);

  console.log(scrolled)
  
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    // Icon Toggler
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = scrolled ? 'nav scrolled' : 'nav';

  return (
    <nav className={navClass}>
      <Link href="/" className="nav-brand">
        <img src="/img/logo.png" alt="" />
      </Link>
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