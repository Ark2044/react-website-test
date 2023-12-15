// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isTeamsDropdownVisible, setTeamsDropdownVisible] = useState(false);
  const [isEventsDropdownVisible, setEventsDropdownVisible] = useState(false);
  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleTeamsDropdown = () => {
    setTeamsDropdownVisible(!isTeamsDropdownVisible);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownVisible(!isEventsDropdownVisible);
  };

  const handleLinkClick = (url) => {
    // Close all dropdowns
    toggleTeamsDropdown();
    toggleEventsDropdown(); // Add more toggles if needed for other dropdowns

    // Navigate to the specified URL
    window.location.href = url;
  };

  // const MyComponent = () => {
  //   const navigate = useNavigate();

  //   const handleClick = (url) => {
  //     // Close all dropdowns
  //     toggleTeamsDropdown();
  //     toggleEventsDropdown(); // Add more toggles if needed for other dropdowns

  //     // Navigate to the specified URL without a full page reload
  //     navigate(url);
  //   };
  // }

  // const handleClick = () => {
  //   document.getElementById("nav-list").style.width="0";
  // }

  // const handleToggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // const handleLinkClick = (url) => {
  //   // Close all dropdowns and the menu
  //   setTeamsDropdownVisible(false);
  //   setEventsDropdownVisible(false);
  //   setMenuOpen(false);

  //   // Navigate to the specified URL without a full page reload
  //   navigate(url);
  //};

  // useEffect(() => {
  //   const closeMenuOnOutsideClick = (event) => {
  //     const sidebar = document.getElementById('nav-list');
  //     const menuIcon = document.getElementById('check');

  //     if (sidebar && menuIcon && !sidebar.contains(event.target) && event.target !== menuIcon) {
  //       setMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener('click', closeMenuOnOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', closeMenuOnOutsideClick);
  //   };
  // }, []);

  return (
    <header className="header" id="header">
      {/* NSS logo */}
      <a className="nss-logo" href="https://nsscrce.org/">
        <img src="/images/logos/nss-logo.svg" alt="NSS Logo" />
      </a>
      {/* FRCRCE logo */}
      <a className="father-logo">
        <img src="/images/logos/father-logo.svg" alt="Father Logo" />
      </a>
      <a className="crce-logo" href="http://frcrce.ac.in/">
        <img src="/images/logos/crce-logo.svg" alt="CRCE Logo" />
      </a>
      {/* Page title */}
      <div className="nss-title animate__animated animate__heartBeat animate__slower animate__repeat-2">
        <a href="#">
          <h1>NSS CRCE</h1>
        </a>
        {/* removed site link */}
      </div>

      <input
        type="checkbox"
        id="check" /*checked={isMenuOpen} onClick={toggleTeamsDropdown}*/
      />
      <label for="check" className="icon">
        <i className="fa fa-bars" id="menu-icon"></i>
        <i className="fa fa-close" id="close-icon"></i>
      </label>

      <ul id="nav-list" /*className={isMenuOpen ? 'open' : ''}*/>
        <li>
          <Link
            to="/"
            style={{ color: "blue" }}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/vol_data"
            style={{ color: "blue" }}
            onClick={() => handleLinkClick("/vol_data")}
          >
            Vol.Data
          </Link>
        </li>
        <li className="dropdown">
          <div className="dropdown-button" onClick={toggleTeamsDropdown}>
            <button
              className={`dropbtn${isTeamsDropdownVisible ? " active" : ""}`}
            >
              Teams ▼ {/* Inverted triangle icon */}
            </button>
          </div>
          {isTeamsDropdownVisible && (
            <div className="dropdown-content">
              <Link
                to="/team_2023_24"
                onClick={() => handleLinkClick("/team_2023_24")}
              >
                Team 2023-24
              </Link>
            </div>
          )}
        </li>
        <li className="dropdown">
          <div className="dropdown-button" onClick={toggleEventsDropdown}>
            <button
              className={`dropbtn${isEventsDropdownVisible ? " active" : ""}`}
            >
              Events ▼ {/* Inverted triangle icon */}
            </button>
          </div>
          {isEventsDropdownVisible && (
            <div className="dropdown-content">
              <Link
                to="/events_2023_24"
                onClick={() => handleLinkClick("/events_2023_24")}
              >
                Events 2023-24
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link
            to="/contactus"
            style={{ color: "blue" }}
            onClick={() => handleLinkClick("/contactus")}
          >
            Contact Us
          </Link>
        </li>

        {/* Add more navigation links */}
      </ul>
    </header>
  );
}

export default Navbar;
