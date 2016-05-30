import React, { Component, PropTypes } from 'react';
import clone from 'lodash/clone';
import childrenType from 'util/propTypes/children';
import './TextBlock.less';

export default class TextBlock extends Component {
	static propTypes = {
		children: childrenType,
		html: PropTypes.string,
	}

	render () {
		var {children, className, ...props} = this.props;
		props.className = 'TextBlock ' + className;

		if(typeof children == 'string') {
			props.dangerouslySetInnerHTML = {
				__html: children
			}

			return (
				<article {...props} />
			);
		}

		return (
			<article {...props}>
				{children}
			</article>
		);
	}
}
