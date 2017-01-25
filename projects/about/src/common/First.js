import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
/*import About from './common/About';
import LAbout from './common/LAbout';*/
import { Button } from '.';
/* - main menu
	This Component displays multiple buttons that will display different pages.
*/
class First extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Button buttonStyle={styles.button} textStyle={{ color: 'red' }}
						onPress={Actions.about}
					>
						About app custom list
					</Button>
					<Button buttonStyle={styles.button}
						onPress={Actions.aboutlistview}
					>
						About ListView
					</Button>
					<Button buttonStyle={styles.button}
						onPress={Actions.objectchange}
					>
						Change a object values
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
