import React from 'react';
import { connect } from 'react-redux';
// import SmurfDisplay from './SmurfDisplay';

const ComicDisplay = (props) => {

    const handleSubmit = (name, age, height) => {
        // e.preventDefault()
        const newSmurf = {
            name: name,
            age: age,
            height: height,
            id: Date.now(),
            isFetching: false,
            error: ''
        },

    }

    const newName = document.querySelector('#nameField').value
    const newAge = document.querySelector('#ageField').value
    const newHeight = document.querySelector('#heightField').value

    return (

        <div className='form-container'>
            <form onSubmit>
                <input id="nameField" type='text' name='name'  ></input>
                <input id="ageField" type='text' name='age'  ></input>
                <input id="heightField" type='text' name='height' ></input>
                <button onSubmit={() => handleSubmit(newName, newAge, newHeight)}>Submit Smurf</button>
            </form>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {})(ComicDisplay);
