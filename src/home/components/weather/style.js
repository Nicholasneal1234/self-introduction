import styled from 'styled-components';

export const Select = styled.select`
  width:200px;
  margin:25px 20px 0px 20px;
  background:#969696;
  border-radius:5px;
  font-weight:bold;
  padding:5px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const WeatherElement = styled.div`
  width:200px;
  margin:5px 25px;
  background:#969696;
  border-radius:5px;
  font-weight:bold;
  padding:5px;
`;