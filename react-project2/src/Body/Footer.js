import React from 'react';
import {Link} from 'react-router-dom';




function Footer() {
  return (
    <div className="Footer">
         <Link to="/"><div className="Footer-Text">
            <p>National Park Service</p>
            <p className="P-USD">U.S. Department of the Interior</p>
        </div></Link>
        <Link to="/"><img src="https://npgallery.nps.gov/GetAsset/27f89990-61ea-4923-8be0-7aa5d3cfa20c/proxy/hires" alt="Logo" height="100px" width="100px"></img></Link>
    </div>
  );
}

export default Footer;