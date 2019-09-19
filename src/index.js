import React from "react";
import ReactDOM from "react-dom";

import { StateInspector, useState, useReducer } from "reinspect";

function CounterFunState() {
  const [sum1, setSum1] = useState(100, "Sum1State");
  return (
    <>
      {sum1}
      <button onClick={() => setSum1(sum1 + 1)}>Add 1 state</button>&nbsp;&nbsp;<b>with useState</b>
    </>
  );
}

function CounterFunReducer() {
  const reducer = (state) => {
    return state + 5;
  };
  const [sum2, dispatch] = useReducer(reducer, 5000, "Sum2State");
  return (
    <>
      {sum2}
      <button onClick={() => dispatch({})}>Add 5 reducer</button>&nbsp;&nbsp;<b>with useReducer</b>
    </>
  );
}

function Counter() {
  return (
    <>
      <StateInspector name="App">
        <h1>StateInspector</h1>
        <CounterFunState /><br/><br/>
        <CounterFunReducer />
        <br/><br/>
      </StateInspector>
    </>
  );
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
