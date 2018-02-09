import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/addkeg">Add Keg</Link>
    </div>
  );
}

export default Header;
