import React, { Component } from 'react';
import PropTypes from 'prop-types';
import childrenType from 'util/propTypes/children';
import './TextBlock.less';

export default class TextBlock extends Component {
	static propTypes = {
		children: childrenType,
		className: PropTypes.string,
	}

	render () {
		const {
			children,
			className,
			...props
		} = this.props;

		props.className = 'TextBlock ' + className;

		if (typeof children == 'string') {
			props.dangerouslySetInnerHTML = {
				__html: children,
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
