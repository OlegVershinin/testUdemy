import React from 'react';
import './App.css';
import Header from './components/Header';
import Content2 from './components/Content2';
import Profilepage from './components/Profilepage';
import MyComponent from './components/My_component';
import MenuExampleVerticalPointing from './components/My_component';
import GridExampleOnlyMultiple from './components/Size';

const App = () => {
  return (
    <div className="body">
      <div>
        <Header />
      </div>
      {/* <div>
        <Profilepage />
      </div>
      <div>
        <Content2 />
      </div> */}
      {/* <MenuExampleVerticalPointing /> */}
    </div>
  );
};
export default App;
