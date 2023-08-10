import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
const styles={
color:'orange',
textAlign:'center',
textTransform:'capitalize',
margin:'50px auto'}
let greet='';
const time=new Date().getHours()
const cssStyle={
  color:''
}
if(time>=0 && time<=11){
  greet="Good Morning"
  cssStyle.color='green'
}else if(time>=12 && time<=20){
  greet="Good afternoon"
  cssStyle.color='orange'
}else {
  greet='Good Night'
  cssStyle.color='black'
}
const name="Sathwik"
const date=new Date().toLocaleDateString()
ReactDOM.render(
<>
<div>
<h1>Hello Sir, <span style={cssStyle}>{greet}</span></h1>
</div>
</>,document.getElementById('root'));
