import React from 'react';
import {Link} from 'react-router-dom';



function Header() {
  return (
    <div className="Header">
        <Link to="/"><p>National Parks List</p></Link>
    </div>
  );
}

export default Header;