import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="love">
        Made with <span style={{fontSize:"15px"}}>&#9829;</span> at nFactorial in 2022.
      </p>
      <p className="fonts">
        Credits: icons from{" "}
        <a href="https://react-icons.github.io/react-icons/">Icons8.</a>
      </p>
    </footer>
  );
};

export default Footer;
