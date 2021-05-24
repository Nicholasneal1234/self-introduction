import React from 'react';
import * as style from './style.js';
import { connect } from 'react-redux';
import Weather from './components/weather/index.js';

function Home () {
	return(
		<style.HomeWrapper>
		    <style.HomeLeft>
		        <style.ListItem>
		            <style.ListInfo className ="title" >學歷:</style.ListInfo>
		            <style.ListInfo className = "desc" ><a href = "https://dhist.ndhu.edu.tw/">東華大學歷史系</a></style.ListInfo>
		            <style.ListInfo className = "desc" >974花蓮縣壽豐鄉大學路二段1號</style.ListInfo>
		            <style.ListInfo className ="title" >經歷:</style.ListInfo>
		            <style.ListInfo className = "desc" >目前沒有跟網頁前端相關的經驗</style.ListInfo>
		            <style.ListInfo className ="title" >作品:</style.ListInfo>
		            <style.ListInfo className = "desc" ><a href = "https://github.com/Nicholasneal1234/bloodPressure">bloodPressure</a></style.ListInfo>
		        </style.ListItem>
		    </style.HomeLeft>
		    <style.HomeRight>
		        <Weather/>
		    </style.HomeRight>
		</style.HomeWrapper>
	)
}

export default connect(null,null)(Home)