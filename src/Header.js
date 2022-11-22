import logo from "./images/logo.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import arrowUp from "./images/icon-arrow-up.svg";
const Header = () => {
  const handleClick = (e) => {
    const eventImg = e.target.querySelector("img");
    if (eventImg.src.match(arrowDown)) {
      eventImg.src = arrowUp;
    } else {
      eventImg.src = arrowDown;
    }
  };

  return (
    <header>
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <button id="features" onClick={(e) => handleClick(e)}>
                Features
                <img src={arrowDown} alt="" />
              </button>
            </li>
            <li>
              <button id="company" onClick={(e) => handleClick(e)}>
                Company
                <img src={arrowDown} alt="" />
              </button>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="buttons">
        <a href="/" id="login">Login</a>
        <a href="/" id="register">Register</a>
      </div>
    </header>
  );
};

export default Header;
