
export default (state = null, action) => {
	console.log('greetings from SelectionReducer');
	console.log(action);
	switch (action.type) {
	case 'select_library':
		console.log("action");console.log(action);
		return action.payload;
		/*const ret = { ...state, item: action.payload };
		console.log('returning');
		console.log(ret);
		return ret;*/
	default:
		return state;
	}
};
