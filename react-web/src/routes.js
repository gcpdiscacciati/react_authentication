import React from 'react';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <PrivateRoute path="/home" component={Home} />;
        </Switch>  
    </BrowserRouter>
);

export default Routes;