import SettingsReducer from './SettingsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	settingsStore: SettingsReducer
});
