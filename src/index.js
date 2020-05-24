import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import Root from "./components/Root";

//import AdsService from "./services/Ads";
import { configureStore } from "./store";

const store = configureStore();

render(
    (<BrowserRouter>
        <Root store={store} />
    </BrowserRouter>
    ), document.getElementById('root')
);

