import React, { Fragment } from 'react';
import Navbar from './components/layouts/NavBar';
import Alert from './components/Alert';
import HomeConnect from './Pages/Home/HomeConnect';
import Home from './Pages/Admin'

//Routing ..

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//Redux

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Fragment>
					<Navbar />
					<Alert />
					<Home />
					<Switch />

				</Fragment>
			</div>
		</Provider>
	);
}

export default App;
