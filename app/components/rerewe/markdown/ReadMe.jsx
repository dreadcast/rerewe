import React from 'react';
import Layout from 'components/rerewe/layout/GlobalLayout.jsx';
import TextBlock from 'components/ui/text/TextBlock.jsx';
import readme from './../../../../README.md';

export default function ReadMe () {
	return (
		<Layout>
			<TextBlock className='ReadMe mod-mixed'>
				{readme}
			</TextBlock>
		</Layout>
	);
}
