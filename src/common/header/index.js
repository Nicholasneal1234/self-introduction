import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, HeaderItem } from './style.js';
import * as action from './store/actionCreater.js';

function Header (props) {
	useEffect(
	 ()=>{
	  props.changeName();
	  props.changeGender();
	  props.changeAge();
	 }
	,
	 []
	);
	return(
		<HeaderWrapper>
		    <HeaderItem>{props.name}的個人履歷</HeaderItem>
		    <HeaderItem>gender : {props.gender}</HeaderItem>
		    <HeaderItem>age : {props.age}</HeaderItem>
		</HeaderWrapper>
	)
}

const mapState = (state) => {
	return {
		name : state.header.name,
		gender : state.header.gender,
		age : state.header.age
	}
}
const mapDispatch = (dispatch) => {
	return{
		changeName(){
			dispatch(action.setName())
		}
		,
		changeGender(){
			dispatch(action.setGender())
		}
		,
		changeAge(){
			dispatch(action.setAge())
		}
	}
}
export default connect ( mapState, mapDispatch )( Header );