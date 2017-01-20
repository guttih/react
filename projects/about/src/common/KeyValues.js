import React, { Component } from 'react';
import { Text, View } from 'react-native';


//ListView Component er til í react-native safninu.

class KeyValues extends Component {


	 objectToView (data) {
		 let keys = Object.keys(data);
		 return keys.map(key => {
			return (
				<View>
					<Text>
						{key}
					</Text>
					<Text>
						{data[key]}
					</Text>
				</View>
			);
		 });
	 }

	render () {
		const { data } = this.props;
		return (
			<View>
				<Text>
					{ this.objectToView(data) }
				</Text>
			</View>
		);
	}
}

export default KeyValues;
