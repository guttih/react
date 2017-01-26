import React, { Component } from 'react';
import { TextInput } from 'react-native';

class InputText extends Component {
	constructor (props) {
		super(props);
		//this.state = { text: this.props.text };
	}

	onChange (value) {
		this.props.onChangeText(value);
	}

	render () {
		const { placeholder, text  } = this.props;
		return (
		<TextInput
			style={styles}
			onChangeText={this.onChange.bind(this)}
			value={this.props.text}
		/>
		);
	}
}

const styles = {
	height: 35,
	borderWidth: 1,
	flex:1
};

export default InputText;
