import React from 'react';
import { Link } from 'react-router-dom';


function Error404() {
  return (
    <div>
      <p>Whoops! Page not found! Would you like to return <Link to="/">home</Link>?</p>
    </div>
  );
}

export default Error404;
