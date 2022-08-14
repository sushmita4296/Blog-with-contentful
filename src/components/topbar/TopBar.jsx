import { Outlet } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  return (
    <>
      {/* <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
      </div>
      

      <div className="topCenter">
        <ul className="topList ">
          <li className="topListItem link link-effect"><a><Link to="/">Home</Link></a></li>
          <li className="topListItem link link-effect"><Link to="/about">About</Link></li>
          <li className="topListItem link link-effect"><Link to="/contact">Contact</Link></li>
          <li className="topListItem link link-effect">Write</li>
          <li className="topListItem link link-effect">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div> */}

      <div className="topMenu container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">About</a>

              <a className="navbar-link">Contact</a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
export default TopBar;
