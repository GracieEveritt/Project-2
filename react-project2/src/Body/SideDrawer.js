import React from 'react';
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'Side-Drawer'
    if(props.show){
        drawerClasses = "Side-Drawer Open-Drawer"
    }
   
    console.log('SideDrawer-props.show',props.show)
    
    return(
    <>
    <nav className={drawerClasses}>
        <ul>
            <li className="Drawer-Li"><a href="/">Home</a></li>
            <li className="Li-Middle"><a href="/USMap">US Map</a></li>
            <li className="Drawer-Li"><a href="/Contact">Contact</a></li>
        </ul>
    </nav>
   
    </>
    )
}

export default SideDrawer