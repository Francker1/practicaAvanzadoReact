import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { user, ads, filters, favs } from "./reducers";

const reducer = combineReducers({
    user,
    ads,
    filters,
    favs,
});

export function configureStore(preState) {
    const store = createStore(reducer, preState, composeWithDevTools());
    return store;
}
