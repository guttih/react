import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { KeyValueListChangeble } from './common';
import { connect } from 'react-redux';
import { setInitialValues, updateValue } from '../actions';

class SettingsChange extends Component {
/*
	This page will display a list of properties in a object.
    It uses a LisKeyValueListChangeble Component 
	to display the keys and values.
*/
	prentaGildi (obj) {
		  console.log(obj);
	  }
	updateSettingsValue (key, value) {
		this.props.updateValue(key, value);
	}

	render () {
		const { title } = this.props;
		this.prentaGildi(this.props.settingsStore);
		return (
			<View style={styles.aboutView}>
				<Text style={styles.aboutText}>
					{ title }
				</Text>
				<KeyValueListChangeble onChange={this.updateSettingsValue.bind(this)} keyStyle={{  fontStyle: 'italic' }} data={this.props.settingsStore}/>
			</View>
		);
	}
}

const styles = {
	aboutView:{
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	aboutText:{
		fontSize: 20,
		margin: 10,
		marginBottom: 30
	}
};

const mapStateToProps = state => {
	const { settingsStore } = state;
	return { settingsStore };
};


export default connect(mapStateToProps, { setInitialValues, updateValue })(SettingsChange);
