import * as types from './types';

export const getSettings = () => {

};

export const setInitialValues = newValues => {
	return {
		type: types.SET_INITIAL_SETTINGS,
		payload: newValues
	};
};
export const updateValue = (prop, value) => {
	return {
		type: types.UPDATE_SETTINGS,
		payload: { prop, value }
	};
};
