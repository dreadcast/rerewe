import React from 'react';
import Menu from 'components/rerewe/layout/menu/Menu.jsx';
import { Grid, Row, Col } from 'components/ui/grid/Grid.jsx';
import './Header.less';

export default function Header () {
	return (
		<header className='Header'>
			<Grid>
				<Row>
					<Col sm={2} mdOffset={1}>
						<div className='Header-img-holder' />
					</Col>
					<Col sm={8}>
						<h1 className='Header-title'>
							Rerewe
							<small className='Header-subtitle'>
								Kickstart your React/Redux apps
							</small>
						</h1>
					</Col>
				</Row>
				<Row className='Header-menu'>
					<Col sm={10} smOffset={2} mdOffset={3}>
						<Menu />
					</Col>
				</Row>
			</Grid>
		</header>
	);
}
