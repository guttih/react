import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setInitialValues } from '../actions';
import { ListObjects } from './common';

class FetchAndView extends Component {
	dataHasArrived = false;

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

	getData () {
		this.dataHasArrived = false;
		this.data = {
			varname1: 'value1',
			varname2: 'value2',
			varname3: 'value3',
			varname4: 'value4',
			varname5: 'value5',
			varname6: 'value6'
		};
		let that = this;
		fetch(this.props.src)
      	.then((response) => response.json())
      	.then(
			  (responseJson) => {
				that.data = responseJson;
				this.dataHasArrived = true;
				console.log('got the data');
				console.log(that.data);
			})
      .catch((error) => {
		  	console.log('villan ....................');
			console.error(error);
		});

		//this.dataHasArrived = true;
	}
	displayContent () {
		if (this.dataHasArrived === true) {
			return (
				<ListObjects
					keyStyle={{  fontStyle: 'italic' }}
					data={this.objectToArray(this.data)}	/>
			);
		} else {
			return (
				<Text>
					Loading shit...
				</Text>
			);
		}
	}

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
		const { title, src } = this.props;
		this.getData();
		return (
			<View style={styles.aboutView}>
				<Text style={styles.aboutText}>
					title:	{title}
				</Text>
				<Text style={styles.aboutText}>
				  source:	{src}
				</Text>
				{ this.displayContent() }
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

export default connect(mapStateToProps, { setInitialValues })(FetchAndView);
