import logo from "./images/logo.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import calendar from "./images/icon-calendar.svg";
import planning from "./images/icon-planning.svg";
import reminders from "./images/icon-reminders.svg";
import todo from "./images/icon-todo.svg";

const Header = () => {
  const handleFeature = () => {
    const eventIcon = document.querySelector("#features>img");
    const dropdown = document.querySelector("#feature>.dropdown");
    if (eventIcon.src.match(arrowDown)) {
      eventIcon.src = arrowUp;
      dropdown.classList.add("show");
    } else {
      eventIcon.src = arrowDown;
      dropdown.classList.remove("show");
    }
  };
  const handleCompany = () => {
    const eventIcon = document.querySelector("#company>img");
    const dropdown = document.querySelector("#comp>.dropdown");
    if (eventIcon.src.match(arrowDown)) {
      eventIcon.src = arrowUp;
      dropdown.classList.add("show");
    } else {
      eventIcon.src = arrowDown;
      dropdown.classList.remove("show");
    }
  };
  const handleMenu = () => {
    const menu = document.querySelector(".menu");
    const layer = document.querySelector(".layer");
    const nav = document.querySelector(".nav-wrapper");
    menu.classList.toggle("active");
    layer.classList.toggle("active");
    nav.classList.toggle("show");
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-wrapper">
        <nav>
          <ul>
            <li id="feature">
              <button id="features" onClick={() => handleFeature()}>
                Features
                <img src={arrowDown} alt="" />
              </button>
              <ul className="dropdown">
                <li>
                  <img src={todo} alt="" />
                  <a href="/">Todo List</a>
                </li>
                <li>
                  <img src={calendar} alt="" />
                  <a href="/">Calendar</a>
                </li>
                <li>
                  <img src={reminders} alt="" />
                  <a href="/">Reminders</a>
                </li>
                <li>
                  <img src={planning} alt="" />
                  <a href="/">Planning</a>
                </li>
              </ul>
            </li>
            <li id="comp">
              <button id="company" onClick={() => handleCompany()}>
                Company
                <img src={arrowDown} alt="" />
              </button>
              <ul className="dropdown">
                <li>
                  <a href="/">History</a>
                </li>
                <li>
                  <a href="/">Our Team</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <a href="/" id="login">
            Login
          </a>
          <a href="/" id="register">
            Register
          </a>
        </div>
      </div>
      <div className="menu" onClick={() => handleMenu()}></div>
    </header>
  );
};

export default Header;
