import React, { useEffect } from 'react';
import { Ri24HoursLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className="header mb-5">
      <div className="d-flex container justify-content-between align-items-center d-none d-md-none d-lg-flex ">
        <Link to="/" aria-label="logo">
          <img
            src={"https://placehold.co/60x60"}
            className="logo"
            width={"60px"}
            height={"60px"}
            alt="logo"
            title="logo"
            loading="lazy"
          />
        </Link>
        <div className="d-flex gap-2 justify-content-start align-items-center nav_contact">
          <Ri24HoursLine className='HoursLine' />
          <div className="d-flex flex-column justify-content-start">
            <div className="d-flex gap-2 align-items-center ">
              <Link to={`tel:01158091380`} className="phone text-decoration-none text-dark">
                01158091380
              </Link>
            </div>
            <div className="d-flex gap-2 align-items-center ">
              <Link to={`mailto:mhmdkhaled130@gmail.com`} className="mailto text-decoration-none text-dark">
                mhmdkhaled130@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg`}>
        <div className="container">
          <Link to="/" aria-label="logo">
            <img
              src={"https://placehold.co/50x50"}
              className="logo d-sm-block none d-lg-none"
              width={"60px"}
              height={"60px"}
              alt="logo"
              title="logo"
              loading="lazy"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

            <ul className="navbar-nav text-light">
              <li className="nav-item">
                <NavLink className="nav-link text-light active" aria-current="page" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={"/about"}>About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={"/features"}>Features </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={"/pricing"}>Pricing </NavLink>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Services </a>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-light" to={"/contact"}>Contact us </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;