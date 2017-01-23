import React from 'react';
import { View, Text } from 'react-native';

const KeyValue = ({ variable, value, keyStyle, valStyle }) => {
	return (
		<View style={styles.item}>
			<Text style={{ ...styles.key, ...keyStyle }}>{variable}</Text>
			<Text style={{ ...styles.value, ...valStyle }}>{value}</Text>
		</View>
	);
};

const styles = {
	item: {
		flexDirection: 'row',
		borderBottomColor:'#cccccc',
		borderBottomWidth:0.3,
		borderStyle:'solid',
		marginTop: 2

	},
	key:{
		flex:0.35,
	},
	value:{
		flex:0.65
	},
};

export default KeyValue;
