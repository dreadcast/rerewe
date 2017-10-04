import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.less';

export default class Menu extends Component {
	render () {
		return (
			<ul className='Menu'>
				<li className='Menu-item'>
					<NavLink
						className='Menu-link'
						activeClassName='selected'
						to='/'
					>
						Home
					</NavLink>
				</li>
				<li className='Menu-item'>
					<NavLink
						className='Menu-link'
						activeClassName='selected'
						to='/about'
					>
						About
					</NavLink>
				</li>
				<li className='Menu-item'>
					<NavLink
						className='Menu-link'
						activeClassName='selected'
						to='/markdown'
					>
						Markdown example
					</NavLink>
				</li>
				<li className='Menu-item'>
					<NavLink
						className='Menu-link'
						activeClassName='selected'
						to='/markdown/readme'
					>
						Readme
					</NavLink>
				</li>
			</ul>
		);
	}
}
