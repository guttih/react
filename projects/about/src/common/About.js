import React, { Component } from 'react';
import { Text, View } from 'react-native';

class About extends Component {
	render () {
		const { title } = this.props;
		return (
			<View>
				<Text>
					Þetta er about
					{ title }
				</Text>
			</View>
		);
	}
}

export default About;
