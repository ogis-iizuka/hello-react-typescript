import React from 'react';
import './App.css';

import Hello from './main/components/Hello';
import HelloClass from './main/components/HelloClass';

const App: React.FC = () => {
  return (
    <div>
      <Hello name="ほげ" enthsiasmLevel={3}/>
      <HelloClass name="ふが" enthsiasmLevel={2}/> 
    </div>
  );
}

export default App;
