// import libraries for making a component
'use strict';

import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle:{
		backgroundColor: '#F8F8F8',
		justifyContent : 'center',
		alignItems     : 'center',
		height: 60,
		paddingTop: 15,
		/*Shawdow not supported on android*/
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 200 },
		shadowOpacity: 0.2
	},
	textStyle:{
		fontSize: 20
	}
};

export { Header };
