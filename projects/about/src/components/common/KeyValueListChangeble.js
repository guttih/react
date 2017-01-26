import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';
import { KeyValueChangebleItem } from '.';
//ListView Component er til í react-native safninu.

class KeyValueListChangeble extends Component {

	_onChange (key, value) {
		this.props.onChange(key, value);
	}

	objectToView (data, keyStyle, valStyle) {
		let keys = Object.keys(data);
		return (
			keys.map(keyName => {
				return (
						<KeyValueChangebleItem
							onChange={this._onChange.bind(this)}
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

export default KeyValueListChangeble;
