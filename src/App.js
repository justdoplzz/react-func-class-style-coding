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
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
          }}></input>
    </div>
  );
}

class ClassComp extends Component{
  state={
    number:this.props.initNumber            // props 를 통해 전달된 값을 set 함
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
      </div>
    )
  }
}

export default App;
