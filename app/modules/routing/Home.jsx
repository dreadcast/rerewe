import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
	render () {
		return (
			<div className='Home'>
				Home <Link to='/about'>About</Link>
			</div>
		);
	}
}
