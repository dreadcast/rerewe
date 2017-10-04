import React, { Component } from 'react';
import { Grid, Row, Col } from 'components/ui/grid/Grid.jsx';
import Header from './header/Header.jsx';
import children from 'util/propTypes/children';

import './GlobalLayout.less';

export default class GlobalLayout extends Component {
	static propTypes = {
		children,
	}

	render () {
		return (
			<div className='GlobalLayout'>
				<Header />
				<Grid>
					<Row>
						<Col
							sm={8}
							smOffset={2}
							md={6}
							mdOffset={3}
						>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
