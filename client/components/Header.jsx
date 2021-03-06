import React from 'react';

function Header() {
  return (
    <header id='header' class='d-flex flex-column justify-content-center'>
      <nav class='nav-menu'>
        <ul>
          <li class='active'>
            <a href='#hero'>
              <i class='bx bx-home'></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href='#about'>
              <i class='bx bx-user'></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href='#resume'>
              <i class='bx bx-file-blank'></i> <span>Resume</span>
            </a>
          </li>
          {/* <li>
            <a href='#portfolio'>
              <i class='bx bx-book-content'></i> <span>Portfolio</span>
            </a>
          </li> */}
          <li>
            <a href='#contact'>
              <i class='bx bx-envelope'></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
