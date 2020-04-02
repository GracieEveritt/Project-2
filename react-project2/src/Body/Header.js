import React from 'react';

import '../App.css';



function Header(props) {
  // let lastUpdatedInput = new Date(props.lastUpdated)
  // let test = new Intl.DateTimeFormat('en-US').format(props.lastUpdated)
  // let lastUpdated = lastUpdatedInput.toString()
  // console.log('header-lastupdatedTest',test)
  // console.log('header-lastupdatedINput',lastUpdatedInput)

  
  let localDate = (new Date(props.lastUpdated)).toGMTString()
 

  console.log('date',localDate)


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