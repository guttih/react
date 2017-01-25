import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';
import LKeyValue from './LKeyValue';
//ListView Component er til í react-native safninu.

class LKeyValues extends Component {

	xonChange (key, value) {
		this.props.onChange(key, value);
	}

	objectToView (data, keyStyle, valStyle) {
		let keys = Object.keys(data);
		return (
			keys.map(keyName => {
				return (
						<LKeyValue
							onChange={this.xonChange.bind(this)}
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
			<View style={styles.keyValuesView}>
				{ this.objectToView(data, keyStyle, valStyle) }
			</View>
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

export default LKeyValues;
