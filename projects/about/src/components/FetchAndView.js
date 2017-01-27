import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setInitialValues } from '../actions';
import { ListObjects } from './common';

class FetchAndView extends Component {
	state = {
		dataHasArrived : false
	};
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
		if (this.state.dataHasArrived === true && (forceUpdate === undefined || forceUpdate === false ) ) {
			return;
		}
		this.setState({
			dataHasArrived : false,
			data: {}
		});
		fetch(this.props.src)
		.then((response) => response.json())
		.then((responseJson) => {
			this.dataHasArrived = true;
			console.log('got the data');
			console.log(responseJson);
			this.dataHasArrived = true;
			this.setState({
				dataHasArrived : true,
				data: responseJson
			});
			//this.forceUpdate(); //force the render function to run again.
		})
		.catch((error) => {
			console.log('Ekki tókst að sækja objectið');
			console.error(error);
		});
	}
	displayContent () {
		if (this.state.dataHasArrived === true) {
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
		marginTop: 5,
		fontFamily: 'Courier New',
		fontSize:10,
		color:'black'
	}
};

const mapStateToProps = state => {
	const { settingsStore } = state;
	return { settingsStore };
};

export default connect(mapStateToProps, { setInitialValues })(FetchAndView);
