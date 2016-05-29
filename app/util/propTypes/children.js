import { PropTypes } from 'react';

const Children = PropTypes.oneOfType([
	PropTypes.node,
	PropTypes.string,
	PropTypes.element,
]);

export default Children;
