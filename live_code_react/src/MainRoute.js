import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHome from './AppHome';
import Login from './component/Login';
import Profile from './component/Profile';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppHome}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    )
}

export default MainRoute;