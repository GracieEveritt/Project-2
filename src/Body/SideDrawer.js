import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'Side-Drawer'
    if(props.show){
        drawerClasses = "Side-Drawer Open-Drawer"
    }
    
    return(
    <nav className={drawerClasses}>
        <ul>
            <li className="Drawer-Li"><Link to="/">Home</Link></li>
            <li className="Li-Middle"><Link to="/USMap">US Map</Link></li>
            <li className="Drawer-Li"><Link to="/Contact">Contact</Link></li>
        </ul>
    </nav>
    )
}

export default SideDrawer