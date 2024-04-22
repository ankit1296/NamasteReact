import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li>
            <Link to="about"> About Me </Link>
          </li>
          <li>
            <Link to="contactUs"> Contact Us </Link>
          </li>
          <li> Cart </li>
          <li>
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
