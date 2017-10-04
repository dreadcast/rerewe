import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import history from 'modules/routing/history';
import asyncComponent from './AsyncComponent.jsx';

import Home from 'promise-loader?bluebird,Home!components/rerewe/home/Home.jsx';
import About from 'promise-loader?bluebird,About!components/rerewe/about/About.jsx';
import ReadMe from 'promise-loader?bluebird,ReadMe!components/rerewe/markdown/ReadMe.jsx';
import MarkDownExample from 'promise-loader?bluebird,MarkDownExample!components/rerewe/markdown/MarkDownExample.jsx';

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={asyncComponent(Home)} />
					<Route path='/about' component={asyncComponent(About)} />
					<Route path='/markdown/readme' component={asyncComponent(ReadMe)} />
					<Route exact path='/markdown' component={asyncComponent(MarkDownExample)} />
				</Switch>
			</Router>
		);
	}
}
