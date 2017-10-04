import React from 'react';
import Layout from 'components/rerewe/layout/GlobalLayout.jsx';
import TextBlock from 'components/ui/text/TextBlock.jsx';
import markdownContent from './react-markdown-example.md';

export default function MarkDownExample () {
	return (
		<Layout>
			<TextBlock className='ReadMe mod-mixed'>
				{markdownContent}
			</TextBlock>
		</Layout>
	);
}
