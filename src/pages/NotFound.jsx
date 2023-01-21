import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        maiores?
      </p>
      <p>
        Go to the <NavLink to='/'>Homepage</NavLink>
      </p>
    </div>
  );
}

export default NotFound;
