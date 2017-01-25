import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LKeyValues from './LKeyValues';
import { connect } from 'react-redux';
import { setInitialValues, updateValue } from '../actions';

class ObjectChange extends Component {

	prentaGildi (obj) {
		  console.log(obj);
	  }
	updateSettingsValue (key, value) {
		this.props.updateValue(key, value);
		//console.log('updateSettingsValue -> key:', key, ' value:', value);
	}
	vistaGildi () {
		console.log('Hér ætti að vista í settingsstore');
	}
	render () {
		const { title } = this.props;
		this.prentaGildi(this.props.settingsStore);
		return (
			<View style={styles.aboutView}>
				<Text style={styles.aboutText}>
					{ title }
				</Text>
				<LKeyValues onChange={this.updateSettingsValue.bind(this)} keyStyle={{  fontStyle: 'italic' }} data={this.props.settingsStore}/>
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

//export default ObjectChange;
export default connect(mapStateToProps, { setInitialValues, updateValue })(ObjectChange);
