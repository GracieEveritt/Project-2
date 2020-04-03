import React from 'react';
import './Header.css';

function Header(props) {

  let localDate = (new Date(props.lastUpdated)).toGMTString()

  return (
    <div className="Header"> 
     <nav className="Top-Nav">
          <ul className="Hamburger"><i onClick={props.drawerClickHandler} id="Hamburger" className="fas fa-bars"></i>
          </ul>
      </nav>
      <div className="Last-Updated">
        <h6>Last Update: &nbsp; &nbsp;{localDate}</h6>
      </div>
    </div>
  );
}

export default Header;