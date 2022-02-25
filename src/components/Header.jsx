import React from 'react';

import starWarsLogo from '../images/star-wars-logo.png';

const Header = () => (
  <header className="m-3 container">
    <div className="sm-3 text-center">
      <img
        className="rounded col pull-left"
        width="200px"
        src={ starWarsLogo }
        alt="Star Wars Logo"
      />
      <h1 className="ms-5 col">Star Wars Planets Search</h1>
    </div>
  </header>
);

export default Header;
