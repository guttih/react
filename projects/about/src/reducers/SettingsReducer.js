import { REHYDRATE } from 'redux-persist/constants';
import {
	SET_INITIAL_SETTINGS,
	UPDATE_SETTINGS
} from '../actions/types';

const INITIAL_STATE = {
	var1: 'gildi 1',
	var2: 'gildi 2',
	var3: 'gildi 3',
	var4: ''
};


const rehydrate = (payload) => {
	const incoming = payload.settingsStore;
	console.log('incoming');console.log(incoming);
	//return { ...incoming, expanded: '', answer: '' }
	return { ...incoming };
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case REHYDRATE :
		return rehydrate(action.payload);
	case SET_INITIAL_SETTINGS :
				/*Eff einhver vill resetta storið*/
		return INITIAL_STATE;
	case UPDATE_SETTINGS :
	                     /* svona er hægt að sækja bara key-inn*/
		return { ...state, [action.payload.prop]: action.payload.value };
	default:
		return { ...state };
	}
};
