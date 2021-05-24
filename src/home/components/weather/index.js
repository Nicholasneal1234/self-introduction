import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { locationGet, weatherGet }  from './store/actionCreater.js';
import * as style from './style.js';

function Weather (props) {
	const [ location, setlocation ] = useState ([]);
	useEffect(
        () => {
        	props.locationChange();
        }
	    ,
	    []
	)
	return(
		<div>
		    <style.Select onChange = {(e) =>{ setlocation(e.target.value) }}>
		        {
		        	props.location.map((item, index) => {
		        		return (<option key = {index}>{item.locationName}</option>);
		        	})
		        }
		    </style.Select><br/>
		    <button style={{width:200, margin:25, padding:5, background:"#ec6149", borderRadius:5, fontWeight:"bold"}} onClick = {() => {props.weatherChange(location)}} >確認</button>
		    {
		    	props.parameter.map((item, index) => {
		    		if(index == 0){
		    			return <style.WeatherElement>縣市:{item.parameterValue}</style.WeatherElement>
		    		}
		    		if(index == 2){
		    			return <style.WeatherElement>城鎮:{item.parameterValue}</style.WeatherElement>
		    		}
		    	})
		    }
		    <style.WeatherElement>時間:{props.time}</style.WeatherElement>
		    {
		    	props.element.map((item, index) => {
		    		if(index == 3){
		    			return <style.WeatherElement>溫度:{item.elementValue}</style.WeatherElement>
		    		}
		    	})
		    }
		</div>
	)
}

const mapState = (state) => {
	return{
		location:state.weather.item,
		parameter:state.weather.parameter,
		time:state.weather.time,
		element:state.weather.weatherElements
	}
}

const mapDispatch = (dispatch) => {
	return{
		weatherChange(location){
			dispatch(weatherGet(location))
		}
		,
        locationChange(){
        	dispatch(locationGet())
        }
	}
}

export default connect(mapState,mapDispatch)(Weather);