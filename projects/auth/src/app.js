import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	componentWillMount () {
		firebase.initializeApp({
			apiKey: 'AIzaSyCqXmPjmu8qwmI8Dwdq2P3-wi72bQKy7wo',
			authDomain: 'authentication-7c0f8.firebaseapp.com',
			databaseURL: 'https://authentication-7c0f8.firebaseio.com',
			storageBucket: 'authentication-7c0f8.appspot.com',
			messagingSenderId: '338710916814'
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}
	renderContent () {
		switch (this.state.loggedIn) {
		case true:
			return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
			);
		case false:
			return <LoginForm />;
		default :
			return <Spinner size="large" />;
		}
	}

	render () {
		return (
			<View  style={styles.viewStyle}>
				<Header headerText="Authentication" />

				{ this.renderContent()}
			</View>
		);
	}
}
/*ÞEtta er ekki í tutorial,
  ég bætti þessu við því takkinn sést ekki*/
const styles = {
	viewStyle:{
		height:200
	}
};


export default App;
