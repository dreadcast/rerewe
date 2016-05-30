import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'modules/store.js';

import Home from 'promise?bluebird,Home!components/rerewe/home/Home.jsx';
import About from 'promise?bluebird,About!components/rerewe/about/About.jsx';
import ReadMe from 'promise?bluebird,ReadMe!components/rerewe/markdown/ReadMe.jsx';
import MarkDownExample from 'promise?bluebird,MarkDownExample!components/rerewe/markdown/MarkDownExample.jsx';

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
				<Route path='/markdown/readme' getComponents={loadComponent(ReadMe)} />
				<Route path='/markdown' getComponents={loadComponent(MarkDownExample)} />
			</Router>
		);
	}
}
