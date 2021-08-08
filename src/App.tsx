import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redux2 from './component/redux2';
import Redux1 from './component/redux1';
import ReactRedux1 from './component/react-redux1';
import ReactRedux2 from './component/react-redux2';
import FlexComponent from './component/flex';
import { Utils } from './utils/utils';
import { TestDefineStore1 } from './page/definedStore/test1';
import { TestDefineStore2 } from './page/definedStore/test2';
import { TestDefineStore3 } from './page/definedStore/test3';
import { Fullscreen } from './component/full-screen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Redux2></Redux2>
        <Redux1></Redux1>
        <hr />
        <ReactRedux1></ReactRedux1>
        <ReactRedux2></ReactRedux2> */}
        {/* <FlexComponent></FlexComponent> */}
        {/* <TestDefineStore1></TestDefineStore1>
        <TestDefineStore2></TestDefineStore2>
        <TestDefineStore3></TestDefineStore3> */}
      </header>
      <Fullscreen></Fullscreen>
    </div>
  );
}

export default App;

