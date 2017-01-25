import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
/*import About from './common/About';
import LAbout from './common/LAbout';*/
import Button from './Button';
class First extends Component {
	render () {
		return (
			<View style={styles.container}>
				{/*	<About title="Um snjallsímaforritið" />
					<LAbout title="Um snjallsímaforritið" />*/}
				<View style={styles.buttonContainer}>
					<Button buttonStyle={styles.button} textStyle={{ color: 'red' }}
						onPress={Actions.about}
					>
						About custom KeyValues
					</Button>
					<Button buttonStyle={styles.button}
						onPress={Actions.labout}
					>
						About ListView
					</Button>
					<Button buttonStyle={styles.button}
						onPress={Actions.objectview}
					>
						ObjectView
					</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button:{
		marginBottom:50,
		height: 20,
		backgroundColor:'green'
	},
	buttonContainer:{

		width: (Dimensions.get('window').width * 0.6),
		height: 200
	}
};
export default First;
