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
	SettingsChange,
	First,
	SettingsView,
	FetchAndView
 } from './components';


import { createStore } from 'redux';
import Reducers from './reducers';

const scenes = Actions.create(
	<Scene key="root">
		<Scene initial key="first" component={First} title="Main menu"/>
		<Scene key="about" component={About} title="About app custom list"/>
		<Scene key="aboutlistview" component={AboutListView} title="About app listview"/>
		<Scene key="objectview" component={SettingsView} title="View settings"/>
		<Scene key="objectchange" component={SettingsChange} title="Change settings"/>
		<Scene key="fetchinfo"
				component={FetchAndView} 
				title="Fetch and View info"
				src="https://raw.githubusercontent.com/guttih/react/master/obj/info"
				/>
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

