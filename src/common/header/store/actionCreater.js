import * as type from './actionType';

export const setName = () => {
	return{
		type:type.SET_NAME,
		name:'簡聖舫'
	}
}

export const setGender = () => {
	return{
		type:type.SET_GENDER,
		gender:'male'
	}
}

export const setAge = () => {
	return{
		type:type.SET_AGE,
		age:'25'
	}
}