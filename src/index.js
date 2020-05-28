import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import Root from "./components/Root";

//import AdsService from "./services/Ads";
import { configureStore } from "./store";

const store = configureStore()();

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById("root"),
);
