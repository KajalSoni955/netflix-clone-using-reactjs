import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav__avatar"
        src="0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

export default Nav;
