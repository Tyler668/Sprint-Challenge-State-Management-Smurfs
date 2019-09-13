import React from 'react';
import './App.css';
import SmurfDisplay from './SmurfDisplay';
import SmurfForm from './SmurfForm';
// import Axios from 'axios';

// import './App.scss';


function App() {

  // Axios.get(`http://localhost:3333/smurfs`)
  // .then(res =>{
  //   console.log(res.data)
  // })


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

