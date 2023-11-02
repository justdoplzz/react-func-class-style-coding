import React, { Component, useEffect, useState } from 'react';
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

var funcStyle = 'color:blue';
var funcId = 0;
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

  // side effect (부가적인 작용), 복수개 설치 가능
  useEffect(function(){           // render가 끝난 후 호출됨   (=componentDidMount, componentDidUpdate)
    console.log('%cfunc => useEffect (=componentDidMount & componentDidUpdate) ' +(++funcId), funcStyle);
    document.title = number + ' : ' + _date;        // 타이틀(탭이름)이 바뀜

    return function(){          // = clean up (useEffect가 실행되고, 다시 useEffect를 실행하기 전에 정리정돈 하는 작업)
      console.log('%cfunc => useEffect return (=componentDidMount & componentDidUpdate) ' +(++funcId), funcStyle);
    }
  })

  console.log('%cfunc => render ' +(++funcId), funcStyle);

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

var classStyle = 'color:red';
class ClassComp extends Component{
  state={
    number:this.props.initNumber,            // props 를 통해 전달된 값을 set 함
    date:(new Date()).toString()
  }
  componentWillMount(){         // render가 실행되기 전에 componentWillMount 작용
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){          // render가 실행되고나서 처리해야할 일이 있을 때 componentDidMount 사용
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){          // 성능과 관계있음
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;             // true : render 호출 , false : render 미호출
  }
  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  render(){
    console.log('%cclass => render', classStyle);
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
