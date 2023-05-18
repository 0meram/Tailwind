import React from 'react';
import './style/main.css'
import SideMenu from './components/SideMenu';
import Main from './components/Main';

const App = () => {

  const styles = `
  .recharts-cartesian-axis-line {
    stroke: #C2C7CF;
    stroke-width: 1;
  }
`;

  return (
    <>
      <SideMenu/>
      <Main/>
    </>
  );
};

export default App;
