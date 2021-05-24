import { combineReducers } from 'redux';
import * as headerReducer from '../common/header/store/index.js';
import * as weatherReducer from '../home/components/weather/store/index.js';

export default combineReducers({
	header:headerReducer.reducer,
	weather:weatherReducer.reducer
});