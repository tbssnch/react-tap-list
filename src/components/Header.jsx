import React from 'react';
import { Link } from 'react-router-dom';
import Rlogo from '../assets/riveters-logo.gif';
import TAlogo from '../assets/ta_logo.png';

function Header() {
  return (
    <div className="header">
      <style jsx>
        {`
          .header {
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
            display: flex;
            justify-content: center;
            width: 400px;
            height: 80px;
            background-color: #000;
          }
          .ta-logo {
            width: 100px;
          }
          .r-logo {
            width: 100px;
          }
          h1 {
            color: #ffff;
            font-family: 'Open Sans Condensed', sans-serif;
          }

        `}
      </style>

      <div className="nav-links">
        <ul>
          <li><Link className="links" to="/">Home </Link></li>
        </ul>
      </div>
      <div className="logo-container">
        <img className="r-logo" src={Rlogo}></img>
        <img className="ta-logo" src={TAlogo}></img>
        <div className="logo">
          <h1>D O U B L E P O S T</h1>
        </div>
        <img className="ta-logo" src={TAlogo}></img>
        <img className="r-logo" src={Rlogo}></img>

      </div>
    </div>
  );
}

export default Header;
