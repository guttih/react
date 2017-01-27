/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './reducers';

import {
	About,
	AboutListView,
	SettingsChange,
	First,
	SettingsView,
	FetchAndView
 } from './components';




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
		<Scene key="fetchmonster"
				component={FetchAndView}
				title="Fetch and View monster"
				src="https://raw.githubusercontent.com/guttih/react/master/obj/monster.json"
		/>
	</Scene>
);

class App extends Component {
	render () {
		const logger = createLogger();
		const store = createStore(
			Reducers,
			{},
			compose(
				autoRehydrate(),
				applyMiddleware(logger)
			)

		);
		 persistStore(store, { storage: AsyncStorage }, () => {
      		console.log('Store restored!');
			console.log(store);
    	});
		return (
			<Provider store={store}>
				<Router scenes={scenes}/>
			</Provider>
		);
	}
}

export default App;

