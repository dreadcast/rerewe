import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	//...reducers,
	routing: routerReducer
});
// Add the reducer to your store on the `routing` key
export const store = createStore(
	reducers,
	window.devToolsExtension ? window.devToolsExtension() : f => f,
	applyMiddleware(thunkMiddleware)
);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);
