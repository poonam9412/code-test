import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDashBoard from '../pages/dashBoard'
const Main = () => (
    
    <Router>
        <Switch>
        <Route exact component={UserDashBoard} />
        </Switch>
    </Router> 
)

export default Main; 