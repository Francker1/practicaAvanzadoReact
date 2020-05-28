import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import * as reducers from './reducers';

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

const configMiddleware = (config) => [
    ReduxThunk.withExtraArgument(config)
];

const composeEnhancers = composeWithDevTools;

export function configureStore(config) {
    return function (preloadedState) {
      const reducer = createRootReducer(config);
      const middlewares = configMiddleware(config);
      const enhancers = composeEnhancers(applyMiddleware(...middlewares));
      const store = createStore(reducer, preloadedState, enhancers);
      return store;
    };
}