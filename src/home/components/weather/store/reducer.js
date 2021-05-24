import * as type from './actionType';

const defaultState = {
    item:[],
    parameter:[],
    time:"",
    weatherElements:[]
}

export default ( state = defaultState, action ) => {
	if(action.type===type.SET_WEATHER){
		const newState = JSON.parse(JSON.stringify(state));
		newState.parameter = action.item.parameter.slice();
		newState.time = action.item.time.obsTime;
		newState.weatherElements = action.item.weatherElement.slice();
		return newState;
	}
	if(action.type===type.SET_LOCATION){
		const newState = JSON.parse(JSON.stringify(state));
		newState.item = action.item.slice();
		return newState;
	}
	return state;
}