import React from 'react';
import { Link } from 'react-router-dom';

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
          .beer-logo {
            width: 80px;
          }
          .nav-links {

          }
          ul {
            display: flex;
          }
          li {
            list-style: none;
            padding: 20px;

          }

        `}
      </style>

      <img className="beer-logo" src="https://image.flaticon.com/icons/svg/23/23417.svg"></img>
      <div className="nav-links">
        <ul>
          <li><Link className="links" to="/">Home </Link></li>
          <li><Link className="links" to="/addkeg">Add Keg</Link></li>

        </ul>
      </div>
    </div>
  );
}

export default Header;
