import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress () {
		this.setState({ error: '', loading:true });
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}
	onLoginSuccess () {
		this.setState({
			email:'',
			password:'',
			loading:false,
			error:''
		});
	}
	onLoginFail () {
		this.setState({
			 error: 'Authentication Failed.',
			loading: false,
		});
	}
	renderButton () {
		if (this.state.loading) {
			return (<Spinner size="small" />);
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	};

	render () {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.email}
						label="Email"
						placeholder="user@example.com"
						onChangeText={emailText => this.setState({ email:emailText })}
					/>
				</CardSection>
				<CardSection>
					<Input
						value={this.state.password}
						label="Password"
						placeholder="password"
						secureTextEntry
						onChangeText={passText => this.setState({ password:passText })}
					/>
				</CardSection>
				<Text style={styles.errorText}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
