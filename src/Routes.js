import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Info from "./info/info";
import Updates from "./liveupdates/liveupdates";
import Home from "./Home/Home";

export default class Routes extends Component {
    render() {
        return (
            <div>
            <Router>
                <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/info" component={Info} />
                    <Route path="/updates" component={Updates} />
                </Switch>
                </div>
            </Router>
            </div>
        );
    }
}