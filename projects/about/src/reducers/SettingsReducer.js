import {
	SET_INITIAL_SETTINGS,
	UPDATE_SETTINGS } from '../actions/types';

const INITIAL_STATE = {
	var1: 'gildi 1',
	var2: 'gildi 2',
	var3: 'gildi 3',
	var4: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case UPDATE_SETTINGS :
	                     /* svona er hægt að sækja bara key-inn*/
		return { ...state, [action.payload.prop]: action.payload.value };
	default:
		return { ...state };
	}
};
