import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
// import SmurfDisplay from './SmurfDisplay';

const ComicDisplay = (props) => {
    // const newName = document.querySelector('#nameField').value;
    // const newAge = document.querySelector('#ageField').value;
    // const newHeight = document.querySelector('#heightField').value;



    const handleSubmit = (name, age, height) => {
        // name.preventDefault()
        // age.preventDefault()
        // height.preventDefault()
        const newSmurf = {
            name: name,
            age: age,
            height: height,
            id: Date.now(),
            isFetching: false,
            error: ''
        }

        props.addSmurf(newSmurf);
    }


    return (

        <div className='form-container'>
            
                <input id="nameField" type='text' name='name' placeholder = 'Name' ></input>
                <input id="ageField" type='text' name='age' placeholder = 'Age' ></input>
                <input id="heightField" type='text' name='height' placeholder = 'Height'></input>
                <button onClick = {() => handleSubmit(`${document.querySelector('#nameField').value}`, `${document.querySelector('#ageField').value}`, `${document.querySelector('#heightField').value}`)}>Submit Smurf</button>
            

        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { addSmurf })(ComicDisplay);
