/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import About from './common/About';
import LAbout from './common/LAbout';
import First from './common/First';
import ObjectChange from './common/ObjectChange';

import { createStore } from 'redux';
import Reducers from './reducers';

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="first" component={First} title="Main menu"/>
		<Scene key="about" component={About} title="Um forritið Custom"/>
		<Scene key="labout" component={LAbout} title="Um forritið ListView"/>
		<Scene key="objectview" component={ObjectChange} title="Change object"/>
	</Scene>
);

class App extends Component {
	render () {
		const store = createStore(
			Reducers,
			{}
		);
		return (
			<Provider store={store}>
				<Router scenes={scenes}/>
			</Provider>
		);
	}
}

export default App;

