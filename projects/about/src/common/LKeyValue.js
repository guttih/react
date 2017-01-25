
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateValue } from '../actions';
import InputText from './InputText';
//<Text style={{ ...styles.value, ...valStyle }}>xxxxx{value}</Text>
const LKeyValue = ({ variable, onChange, value, keyStyle, valStyle }) => {
	const xonChange = val => {
		onChange(variable, val);
	};
	return (
		<View style={styles.item}>
			<Text style={{ ...styles.key, ...keyStyle }}>{variable}</Text>
			<InputText
				onChangeText={t => xonChange(t)}
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
/*const mapStateToProps = state => {
	const { settingsStore } = state;
	return { settingsStore };
};*/
//export default LKeyValues;
//export default connect(mapStateToProps, { updateValue })(LKeyValue);
export default LKeyValue;
//export default connect({ updateValue })(LKeyValue);
