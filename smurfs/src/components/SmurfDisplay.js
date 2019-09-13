import React from 'react';
import { connect } from 'react-redux';

const SmurfDisplay = (props) =>{


    return (
        <div className = 'comic-container'>
           <h1>Name: </h1>
           <h2>Age: </h2>
           <h2>Height: </h2>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
   
    }
  }
  
  export default connect(mapStateToProps, {})(SmurfDisplay);
  