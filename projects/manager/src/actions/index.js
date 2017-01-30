import firebase from 'firebase';

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';
export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch( { type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((error) => {
			console.log('got an error 1x: ');console.log(error);
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => {
				loginUserFail(dispatch);
			});
		});
	};
};

const loginUserFail = (dispacth) => {
	console.log('unable to login :(');
	dispacth({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispacth, user ) => {
	console.log('successfully logged in :)');
	dispacth({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};
