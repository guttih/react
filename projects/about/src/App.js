/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import About from './common/About';
import LAbout from './common/LAbout';
import First from './common/First';

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="first" component={First} title="Main menu"/>
		<Scene key="about" component={About} title="Um forritið Custom"/>
		<Scene key="labout" component={LAbout} title="Um forritið ListView"/>
	</Scene>
);

class App extends Component {
	render () {
		return <Router scenes={scenes}/>;
	}
}

export default App;

