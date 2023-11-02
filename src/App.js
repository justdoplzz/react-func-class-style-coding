import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello, World!!!!!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  var numberState = useState(props.initNumber);     // initNumber 를 사용하고싶을 때는 useState에 첫번째 인자에 값을 줌
  var number = numberState[0];                      // 첫번째 값은 현재 상태값임
  var setNumber = numberState[1];                   // 두번째 값은 상태를 바꿀수있는 값임(=setState)
  console.log('numberState', numberState);

  // 1. useState 기본 사용법
  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  // 2. 축약된 useState 사용법
  var [_date, setDate] = useState((new Date()).toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
          }}></input>
      
      <p>Date : {_date}</p>
      <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());
          }}></input>
    </div>
  );
}

class ClassComp extends Component{
  state={
    number:this.props.initNumber,            // props 를 통해 전달된 값을 set 함
    date:(new Date()).toString()
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>

        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)}></input>

        <p>Date : {this.state.date}</p>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)}></input>
      </div>
    )
  }
}

export default App;
