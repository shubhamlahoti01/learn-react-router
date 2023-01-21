import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>
      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
