import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'modules/store.js';

import Home from 'promise?bluebird,Home!./Home.jsx';
import About from 'promise?bluebird,About!./About.jsx';

function loadComponent(asyncComponent){
	return (location, cb) => {
		return asyncComponent()
			.then(component => cb(null, component.default));
	}
}

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path='/' getComponents={loadComponent(Home)} />
				<Route path='/about' getComponents={loadComponent(About)} />
			</Router>
		);
	}
}
