import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Pay from "./pages/Pay";
import WorkshopArea from "./pages/WorkshopArea";
import Home from "./pages/Home";
import AddPayment from "./pages/AddPayment";
import Receive from "./pages/Receive";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/pay" component={Pay} />
                <Route exact path="/pay/create" component={AddPayment} />
                <Route exact path="/receive" component={Receive} />
                <Route exact path="/workshoparea" component={WorkshopArea} />
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
