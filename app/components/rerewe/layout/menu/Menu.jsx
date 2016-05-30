import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Menu.less';

export default class Menu extends Component {
	render () {
		return (
			<ul className='Menu'>
				<li className='Menu-item'>
					<Link
						className='Menu-link'
						activeClassName='selected'
						to='/'
					>
						Home
					</Link>
				</li>
				<li className='Menu-item'>
					<Link
						className='Menu-link'
						activeClassName='selected'
						to='/about'
					>
						About
					</Link>
				</li>
				<li className='Menu-item'>
					<Link
						className='Menu-link'
						activeClassName='selected'
						to='/markdown'
					>
						Markdown example
					</Link>
				</li>
				<li className='Menu-item'>
					<Link
						className='Menu-link'
						activeClassName='selected'
						to='/markdown/readme'
					>
						Readme
					</Link>
				</li>
			</ul>
		);
	}
}
