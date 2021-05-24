import * as type from './actionType';

const defaultState = {
	name : "",
	gender : "",
	age : ""
}

export default ( state = defaultState, action ) => {
	if(action.type===type.SET_NAME){
		const newState = JSON.parse(JSON.stringify(state));
		newState.name = action.name;
		return newState;
	}
	if(action.type===type.SET_GENDER){
		const newState = JSON.parse(JSON.stringify(state));
		newState.gender = action.gender;
		return newState;
	}
	if(action.type===type.SET_AGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.age = action.age;
		return newState;
	}
	return state;
}