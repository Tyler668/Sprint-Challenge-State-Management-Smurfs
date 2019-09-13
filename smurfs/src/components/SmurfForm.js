import React from 'react';
import { connect } from 'react-redux';
import SmurfDisplay from './SmurfDisplay';

const ComicDisplay = (props) =>{

const handleSubmit = (e) =>{
    e.preventDefault()

} 
    return (
        
        <div className = 'form-container'>
            <form onSubmit>
            <input type = 'text' name = 'name'  ></input>
            <input type = 'text' name = 'age'  ></input>
            <input type = 'text' name = 'height' ></input>
            <button onSubmit = {handleSubmit}>Submit Smurf</button>
            </form>
            
        </div>
    );
}

const mapStateToProps = state =>{
    return{
      state
    }
  }
  
  export default connect(mapStateToProps, {})(ComicDisplay);
  