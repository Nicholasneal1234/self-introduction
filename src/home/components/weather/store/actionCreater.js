import axios from 'axios';
import * as type from './actionType.js';


export const locationSet = (item) => {
	return{
		type:type.SET_LOCATION,
        item:item
    }
}

export const weatherSet = (item) => {
	return{
		type:type.SET_WEATHER,
		item:item
	}
}

export const weatherGet = (location) => {
	return(dispatch) => {
		axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-58FE6CBD-C133-4B5D-840E-8CBCDE210083&locationName='+location)
		.then((res) => {
			res.data.records.location.map((item, index) => {
				if(index==0){
					dispatch(weatherSet(item));
				}
			})
		})
	}
}

export const locationGet = () => {
	return (dispatch) => {
		axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-58FE6CBD-C133-4B5D-840E-8CBCDE210083')
		.then((res) => {
			dispatch(locationSet(res.data.records.location));
			
		})
		.catch(() => {
			console.log("ERROR");
		})
	}
}