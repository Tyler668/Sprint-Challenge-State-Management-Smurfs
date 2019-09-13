import React from 'react';
import './App.css';
import SmurfDisplay from './SmurfDisplay';
import SmurfForm from './SmurfForm';
// import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="content">
       <h1>SMURFS</h1>
       <SmurfDisplay/>
       <SmurfForm/>
      </div>
    </div>
  );
}

export default App;

