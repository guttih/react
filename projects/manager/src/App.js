import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount () {
		var config = {
			apiKey: 'AIzaSyDsuT1nwZiD-1J5Lw9SfzG8re75TKp5I6I',
			authDomain: 'manager-83537.firebaseapp.com',
			databaseURL: 'https://manager-83537.firebaseio.com',
			storageBucket: 'manager-83537.appspot.com',
			messagingSenderId: '974754101560'
		};
		firebase.initializeApp(config);
	}
	render () {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
