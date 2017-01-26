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

	getData (forceUpdate) {
		if (this.dataHasArrived === true && forceUpdate === undefined ) {
			return;
		}
		this.dataHasArrived = false;
		this.data = {};
		fetch(this.props.src)
		.then((response) => response.json())
		.then((responseJson) => {
			this.data = responseJson;
			this.dataHasArrived = true;
			console.log('got the data');
			console.log(this.data);
			this.dataHasArrived = true;
			//force the render function to run again.
			this.forceUpdate();
		})
		.catch((error) => {
			console.log('Ekki tókst að sækja objectið');
			console.error(error);
		});

		//
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
				<Text style={styles.src}>
				   - source:{src} -
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
	src:{
		marginTop: 10,
		fontFamily: 'Courier New',
		fontSize:9,
	}
};

const mapStateToProps = state => {
	const { settingsStore } = state;
	return { settingsStore };
};

export default connect(mapStateToProps, { setInitialValues })(FetchAndView);
