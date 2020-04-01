import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard'
import USMap from '../Maps/USMap'





function Main() {
  
  
  return (
    <div className="Main">
        <Switch>
            <Route exact path="/" render={routerProps => <Dashboard match={routerProps} />} />
            <Route path ="/USMap" component={USMap} />
            {/* <OnePark path="/:parkID" render={ (routerProps) =>
                <OnePark {...routerProps} /> } /> */}
            <Redirect to="/" />
        </Switch>
       
      
        

    </div>
  );
}

export default Main;