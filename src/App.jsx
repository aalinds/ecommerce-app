import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage.jsx';
import Cart from './components/Cart/Cart.jsx';

const App = () => (
	<React.Fragment>
		<NavBar />
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/cart' component={Cart} />
		</Switch>
	</React.Fragment>
);

export default App;
