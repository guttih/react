import React, { Component } from 'react';
import { ScrollView,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

import KeyValue from './KeyValue';

//ListView Component er til í react-native safninu.

class KeyValues extends Component {

	objectToView (data, keyStyle, valStyle) {
		let keys = Object.keys(data);
		return (
			keys.map(keyName => {
				return (
						<KeyValue
							keyStyle={keyStyle}
							valStyle={valStyle}
							key={keyName}
							variable={keyName}
							value={data[keyName]}
						/>
				);
			})
		);
	}

	render () {
		const { data, keyStyle, valStyle } = this.props;
		return (
			<ScrollView style={styles.keyValuesView}>
				{ this.objectToView(data, keyStyle, valStyle) }
			</ScrollView>
		);
	}
}

const styles = {
	keyValuesView : {
		backgroundColor: '#dadfe5',
		width: (Dimensions.get('window').width * 0.9),
		borderRadius: 5,
		borderWidth: 0,
		padding:5
	}
};

export default KeyValues;
