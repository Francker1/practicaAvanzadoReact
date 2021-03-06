import React from "react";

import Front from "../Home/Home";
import Navbar from "../Nav";
import Login from "../login/Login";
import Register from "../register/Register";
import AdsBoard from "../AdsBoard";
import AdDetail from "../AdsDetail";
import AdsFiltered from "../AdsFiltered";
import CreateAdForm from "../AdsForms/CreateAd";
import EditAdForm from "../AdsForms/EditAd";
import Favorites from "../Favs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Front} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Register} />
        <Route path="/ads" render={(props) => <AdsBoard {...props} />}></Route>
        <Route path="/detail/:id" component={AdDetail} />
        <Route path="/filter" component={AdsFiltered} />
        <Route path="/crear" component={CreateAdForm} />
        <Route path="/editar/:id" component={EditAdForm} />
        <Route path="/favs" component={Favorites} />
      </Switch>
    </Router>
  );
}
