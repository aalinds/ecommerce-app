import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage.jsx';

const App = () => (
	<React.Fragment>
		<NavBar />
		<Switch>
			<Route exact path='/' component={HomePage} />
			{/* <Route path='/cart' component={Cart} />
			<Route path='/women' component={Women} />
			<Route path='/men' component={Men} />
			<Route path='/clothes' component={Clothes} />
			<Route path='/accessories' component={Accessories} />
			<Route exact path='/products/:id' component={ShowProduct} /> */}
		</Switch>
	</React.Fragment>
);

export default App;