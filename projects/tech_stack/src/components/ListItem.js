import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	LayoutAnimation,
	UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillMount () {
		//ekki í tutorial, en þetta þarf til að LayoutAnimation.spring(); virki.
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); 
	}
	componentWillUpdate () {
		LayoutAnimation.spring();
		console.log('updating');
	}
	renderDesctiontion () {
		const { library, expanded  } = this.props;
		if (expanded === true) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{library.description}</Text>
				</CardSection>
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
/*onwProps er sama og this.props inní ListItem*/
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded: expanded	};
};

export default connect(mapStateToProps, actions)(ListItem);
