import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tap_room_logo.png';

function Header() {
  return (
    <div className="header">
      <style jsx>
        {`
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          ul {
            display: flex;
          }
          li {
            list-style: none;
            padding: 20px;

          }
          .keg-list {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 50px;
          }
          .logo-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1000px;
          }
          .logo {
            width: 150px;
          }
          h1 {
            color: #ffff;
            font-family: 'Open Sans Condensed', sans-serif;
          }

        `}
      </style>

      <div className="header-container">
        <img className="logo" src={logo}></img>
        <ul>
          <li><Link className="links" to="/">Home </Link></li>
        </ul>

      </div>
    </div>
  );
}

export default Header;
