import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbar: {
    background: green,
  },
  // header: {
  //   background: red,
  // },
  // section: {
  //   background: orange,
  // }
}
const Navbar = () => (
  <nav style={styles.navbar} className="navbar">
    <a href="/">Welcome</a>
  </nav>
);

export default Navbar;
