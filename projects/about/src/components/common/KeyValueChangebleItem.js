
import React from 'react';
import { View, Text } from 'react-native';
import { InputText } from '.';

const KeyValueChangebleItem = ({ variable, onChange, value, keyStyle, valStyle }) => {
	const _OnChange = val => {
		onChange(variable, val);
	};
	return (
		<View style={styles.item}>
			<Text style={{ ...styles.key, ...keyStyle }}>{variable}</Text>
			<InputText
				onChangeText={t => _OnChange(t)}
				style={{ ...styles.value, ...valStyle }}
				placeholder="Write your text" text={value}
			/>
		</View>
	);
};

const styles = {
	item: {
		flexDirection: 'row',
		borderBottomColor:'#cccccc',
		borderBottomWidth:0.3,
		borderStyle:'solid',
		marginTop: 10

	},
	key:{
		flex:0.35,
	},
	value:{
		flex:0.65,
		borderBottomWidth:0,
		borderBottomColor:'blue'
	},
};

export default KeyValueChangebleItem;
