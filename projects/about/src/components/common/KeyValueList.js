import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { KeyValueItem } from '.';

class KeyValueList extends Component {

	objectToView (data, keyStyle, valStyle) {
		let keys = Object.keys(data);
		return (
			keys.map(keyName => {
				return (
						<KeyValueItem
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

export default KeyValueList;
