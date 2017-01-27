import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setInitialValues } from '../actions';
import { ListObjects } from './common';

class SettingsView extends Component {
	objectToArray (jsonObject) {
		let keyList = Object.keys(jsonObject);
		let retArr =  [];
		keyList.forEach(function (keyName) {
			retArr.push({
				key: keyName,
				value: jsonObject[keyName]
			});
		});
		return retArr;
	}
	render () {
		return (
			<View style={styles.aboutView}>
				<Text style={styles.aboutText}>
					titillinn
				</Text>
				<ListObjects
					keyStyle={{  fontStyle: 'italic' }}
					data={this.objectToArray(this.props.settingsStore)}	/>
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
	}, 
	below:{
		marginTop: 50
	}
};

const mapStateToProps = state => {
	const { settingsStore } = state;
	return { settingsStore };
};

export default connect(mapStateToProps, { setInitialValues })(SettingsView);
