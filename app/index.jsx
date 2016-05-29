import React from 'react';
import ReactDOM from 'react-dom';
import { RootInstanceProvider } from 'react-hot-loader/Injection';
import { Provider } from 'react-redux';
import { store } from 'modules/store.js';
import Routes from 'modules/routing/routes.jsx';
import Layout from 'components/rerewe/layout/GlobalLayout.jsx';

// reset default css
import 'asset/css/reset.css';
import 'asset/less/grid.less';
import 'asset/less/responsive.less';
import 'asset/less/base.less';
import 'asset/less/typography.less';

import 'file?name=[name].[ext]!asset/img/favicon.png';
import 'file?name=[name].[ext]!asset/img/favicon.ico';

var root = (
	<Layout>
		<Provider store={store}>
			<Routes />
		</Provider>
	</Layout>

);

var root = ReactDOM.render(root, document.getElementById('content'));

if (process.env.NODE_ENV) {
	RootInstanceProvider.injectProvider({
		getRootInstances: () => {
			return [root];
		}
	});
}
