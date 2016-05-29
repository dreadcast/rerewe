import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './header/Header.jsx';
import childrenType from 'util/propTypes/children';

import './GlobalLayout.less';

export default class GlobalLayout extends Component {
	static propTypes = {
		children: childrenType
	}

	render () {
		return (
			<div className='GlobalLayout'>
				<Header />
				<Grid>
					<Row>
						<Col>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
