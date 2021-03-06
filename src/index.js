import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';

const store = createStore(cartReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
