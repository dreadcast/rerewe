import React, { Component, PropTypes } from 'react';
import './Header.less';

export default class Header extends Component {
	render () {
		return (
			<header className='Header'>
				<div className='Header-img-holder' />
				<h1 className='Header-title'>
					Rerewe
					<small className='Header-subtitle'>
						Kickstart your React/Redux apps
					</small>
				</h1>
			</header>
		);
	}
}
