/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import About from './common/About';

import DeviceInfo from 'react-native-device-info';

class App extends Component {

	render () {
		let info = DeviceInfo.getReadableVersion() + '.' + DeviceInfo.getBuildNumber();
		return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
			{info}
			</Text>
			<About title="Þetta er titill" />
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
export default App;
