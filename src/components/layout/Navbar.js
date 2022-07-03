import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/contact">
          Contact
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <button className="icon " onClick={myFunction}>
          &equiv;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
