import React from 'react';
import {Link} from 'react-router-dom';




function Footer() {
  return (
    <div className="Footer">
        <nav className="Footer-Nav">
          <ul>
              <li><Link to="/"><i className="fas fa-home"></i></Link></li>
              <li><Link to="/USMap"><i className="fas fa-flag-usa"></i></Link></li>
              {/* <li><a href="#about_href"><i className="fas fa-globe-americas"></i></a></li> */}
              <li><Link to="/Contact"><i className="far fa-envelope"></i></Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Footer;