import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="heading">
        <h1>Manipur Edu</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Scholarships</a></li>
          <li><a href="#">Certifications</a></li>
          <button>Sign-Up</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
