import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard'
import USMap from '../Maps/USMap'
import Contact from './Contact'

function Main() {
  
  return (
    <div className="Main">
        <Switch>
            <Route exact path="/" render={routerProps => <Dashboard match={routerProps} />} />
            <Route path ="/USMap" component={USMap} />
            <Route path ="/Contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default Main;