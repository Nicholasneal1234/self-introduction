import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflower:hidden;
  width:1500px;
  margin 0 auto;
`; 

export const HomeLeft = styled.div`
  float:left;
  width:750px;
  margin-left:15px;
  padding-top:30px;
  .banner-img{
  	width:625px;
  	height:270px;
  }
`;

export const HomeRight = styled.div`
  float:right;
  width:600px;
  padding-top:30px;
`;

export const ListItem = styled.div`
  overflower:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
`;

export const ListInfo = styled.div`
  float:left;
  width:500px;
  margin:5px;
  padding:5px;
  background:#969696;
  border-radius:5px;
  font-weight:bold;
  &.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
    background:#ec6149;
  }
  &.desc{
    line-height:24px;
    font-size:13px;
    font-weight:bold;
    color#999;
  }
`;