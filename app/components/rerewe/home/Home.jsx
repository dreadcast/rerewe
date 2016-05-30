import React, { Component, PropTypes } from 'react';
import Layout from 'components/rerewe/layout/GlobalLayout.jsx';
import TextBlock from 'components/ui/text/TextBlock.jsx';

export default class Home extends Component {
	render () {
		return (
			<Layout>
				<TextBlock className='Home mod-mixed'>
					<h1>Home</h1>
					<p>
						This repo was made to quickly start a Webpack, React & Redux project.
					</p>
					<h2>Why this one?</h2>
					<p>
						There are plenty of preconfigured React starter packs,
						but I feel better using my own, taking the best of each.
					</p>
				</TextBlock>
			</Layout>
		);
	}
}
