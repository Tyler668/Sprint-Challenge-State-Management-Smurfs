import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfAC } from '../actions';

const SmurfDisplay = (props) => {

    const getSmurves = () => {
        // e.preventDefault();
        props.getSmurfAC();    
      };

    //   console.log(props.smurfsProp);

    return (
        <div className='smurfs-container'>
            <button onClick={() => getSmurves()}>Get Smurf Data</button>
            {props.smurfsProp.map(smurf => (
                <div className='smurf-div'>
                    <h1>{smurf.name}</h1>
                    <h2>{smurf.age}</h2>
                    <h2>{smurf.height}</h2>
                </div>
            ))
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfsProp: state
    }
}

export default connect(mapStateToProps, { getSmurfAC })(SmurfDisplay);
