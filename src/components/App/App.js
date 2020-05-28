import React from "react";

import Front from "../common/home/Home";
import Navbar from "../Nav";
import Login from "../login/Login";
import Register from "../register/Register";
//import Advertisments from "../ads/Ads";
import AdsBoard from "../AdsBoard";
import AdDetail from "../ads/AdsDetail";
//import Filter from "../forms/Filters";
import AdsFiltered from "../ads/AdsFiltered";
import CreateAdForm from "../forms/CreateAd";
import EditAdForm from "../forms/EditAd";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




export default function Home() {
    
        return (
            <Router>
                
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Front} />
                    <Route path="/login" component={Login} />
                    <Route path="/registro" component={Register} />
                    <Route
                        path="/ads"
                        render={props => <AdsBoard {...props} />}
                    ></Route>
                    <Route path={`/detail/:id`} component={AdDetail} />
                    <Route path="/filter" component={AdsFiltered} />
                    <Route path="/crear" component={CreateAdForm} />
                    <Route path="/editar" component={EditAdForm} />
                    <Route path="/favs" />
                </Switch>

            </Router>
        );
    
}
