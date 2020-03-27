import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';





function Main() {
  return (
    <div className="Main">
        <Switch>
            {/* <Route exact path="/" component={AllParks} />
            
            <OnePark path="/:parkID" render={ (routerProps) =>
                <OnePark {...routerProps} /> } /> */}
            <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default Main;