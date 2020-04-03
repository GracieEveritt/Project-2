import React from 'react';
import './SideDrawer.css'

const Backdrop = props => {

    
    return(
    <>
       <div className="Backdrop" onClick={props.click}/>
    </>
    )
}

export default Backdrop