import React from 'react';
import Header from './components/Header';
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
    <div className="grid grid-rows-[0px,0px] h-screen sm:grid-cols-[270px,1fr]">
      <style>{styles}</style>
      <Header />
      <div className='sm:col-start-1 sm:col-end-2 '>
        <SideMenu />
      </div>
      <Main />
    </div>
  );
};

export default App;
