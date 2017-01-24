import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
		<Text style={textStyle}>
			{children}
		</Text>
		</TouchableOpacity>
	)
}

const styles = {
	textStyle: {
		alignSelf: 'center',
		backgroundColor: 'transparent',
		color: '#007aff',
		fontSize: 18,
		paddingTop: 12,
		paddingBottom: 12,
	},
	buttonStyle: {
		//flex: 1,
		//alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		marginBottom:10
	}
};

export default Button;
