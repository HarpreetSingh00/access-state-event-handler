import React from 'react';
import Case from './Components/Case'
import SolutionOne from './Components/Solution1'
import SolutionTwo from './Components/Solution2'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Learn to access state inside event handler</header>
      <Case />
      <SolutionOne />
      <SolutionTwo />
    </div>
  );
}

export default App;
