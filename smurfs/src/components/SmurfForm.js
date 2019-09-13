import React from 'react';
import { connect } from 'react-redux';
import SmurfDisplay from './SmurfDisplay';

const ComicDisplay = (props) =>{


    return (
        <div className = 'form-container'>
            <form onSubmit>
            <input type = 'text' name = 'name' value = {nameValue}></input>
            <input type = 'text' name = 'age' value = {nameValue}></input>
            <input type = 'text' name = 'height' value = {nameValue}></input>
            <button>Submit Smurf</button>
            </form>
            
        </div>
    );
}

const mapStateToProps = state =>{
    return{
      propsImg: state.comicSRC 
    }
  }
  
  export default connect(mapStateToProps, {})(ComicDisplay);
  