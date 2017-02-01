import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

	componentWillMount () {
		this.props.krappvar = true;
	}
	onEmailChange (text) {
		this.props.emailChanged(text);
	}
	onPasswordChange (text) {
		this.props.passwordChanged(text);
	}
	onButtonPress () {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton () {
		if (this.props.loading) {
			return (<Spinner size="large"/>);
		} else {
			return (
				<Button	style={{ marginTop:50 }} onPress={this.onButtonPress.bind(this)}	>
					Login
				</Button>
			);
		}
	}
	render () {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@google.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry={true}
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>

					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color:'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);
