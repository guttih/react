/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';


import {
	About,
	AboutListView,
	ObjectChange,
	First
 } from './common';


import { createStore } from 'redux';
import Reducers from './reducers';

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="first" component={First} title="Main menu"/>
		<Scene key="about" component={About} title="About app custom list"/>
		<Scene key="aboutlistview" component={AboutListView} title="About app listview"/>
		<Scene key="objectchange" component={ObjectChange} title="Change object values"/>
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

