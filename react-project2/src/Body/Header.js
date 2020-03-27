import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';



function Header() {
  return (
    <div className="Header"> 
     <nav className="Top-Nav">

          <ul><Link to="/"><i id="Hamburger" className="fas fa-bars"></i></Link>
              {/* <li><a href="#logo_href">Home</a></li>
              <li><a href="#project_href">Projects</a></li>
              <li><a href="#about_href">About</a></li>
              <li><a href="#contact_href">Contact</a></li> */}
          </ul>
      </nav>
      <div className="Last-Updated">
        <h6>Last Updated: FIX THIS</h6>
      </div>
    </div>
  );
}

export default Header;