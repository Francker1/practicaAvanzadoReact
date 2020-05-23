import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './components/routing/Routes';

import { configureStore } from "./store";
import AdsService from "./services/Ads";
import UserService from "./services/Users";
import { setAds, setFilters, addToFavs, removeFromFavs, registerUser } from "./store/actions";

const store = configureStore();

store.dispatch(registerUser(UserService.getUserInfo()));
store.dispatch(setAds(AdsService.getAllAds()));
store.dispatch(setFilters("name=baby"));
store.dispatch(addToFavs("5e578e963976de16b4d344b6"));
store.dispatch(removeFromFavs("5e578e963976de16b4d344b6"));


render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);

