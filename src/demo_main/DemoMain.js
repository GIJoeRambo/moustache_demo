import React from 'react';
import './DemoMain.css';
import DemoHeader from './demo_header/DemoHeader';
import DemoBody from './demo_body/DemoBody';

function DemoMain() {
  return (
   <div className='DemoMain'>
      <DemoHeader></DemoHeader>
      <DemoBody></DemoBody>
   </div>
  );
}

export default DemoMain;
