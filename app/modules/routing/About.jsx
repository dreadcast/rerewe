import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
	render () {
		return (
			<div className='About'>
				About <Link to='/'>Home</Link>
			</div>
		);
	}
}
