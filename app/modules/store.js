import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import root from 'modules/RootReducer.js';
import history from './routing/history';
import { routerMiddleware } from 'react-router-redux';

function configureStore(initialState) {
	const middlewares = applyMiddleware(
		thunkMiddleware,
		routerMiddleware(history),
	);

	return createStore(root, initialState, compose(middlewares,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
}

const store = configureStore();

export default store;
