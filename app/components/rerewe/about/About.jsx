import React, { Component, PropTypes } from 'react';
import Layout from 'components/rerewe/layout/GlobalLayout.jsx';
import TextBlock from 'components/ui/text/TextBlock.jsx';

export default class About extends Component {
	render () {
		return (
			<Layout>
				<TextBlock className='About mod-mixed'>
					<h1>About</h1>
					<p>
						This is just a dummy component meant to test routing.
					</p>
					<p>
						It's your turn to build your own app.
					</p>
				</TextBlock>
			</Layout>
		);
	}
}
