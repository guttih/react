import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
