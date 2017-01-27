import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	renderDesctiontion () {
		const { library, selectedLibraryId  } = this.props;
		if (library.id === selectedLibraryId) {
			return (
				<Text>{library.description}</Text>
			);
		}
	}
	render () {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text  style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDesctiontion()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
