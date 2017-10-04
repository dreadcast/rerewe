import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AsyncComponent extends Component {
	static propTypes = {
		getComponent: PropTypes.func,
	}

	state = { Component: null };

	componentWillMount() {
		if (!this.state.Component) {
			this.props.getComponent()
				.then(Component => {
					this.setState({ Component: Component.default });
				});
		}
	}

	render() {
		const { Component } = this.state

		if (Component) {
			return <Component {...this.props} />
		}

		return null;
	}
}

export default function asyncComponent(getComponent) {
	return function () {
		return <AsyncComponent getComponent={getComponent} />
	}
}
