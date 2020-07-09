import React, { useRef } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
import AuthAPI from '../DAL/Auth'
import dataAPI from '../DAL/Logger'
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
    //style for font size
    resize:{
      fontSize:50
    },
    }


function Logger(props){
    const classes = makeStyles(styles);
    let weightRef = useRef();
    let repsRef = useRef();

    let logWorkout = function(e){
        dataAPI.postWorkoutInfo(props.selectedExName.current.value,weightRef.current.value,repsRef.current.value)
    }

    return(
        <Box paddingTop="2vh" display="flex" justifyContent="center">

            <TextField
                label="Weight"
                id="outlined-start-adornment"
                type="number"
                inputRef={weightRef}
                InputProps={{
                    style : {backgroundColor:"aliceblue"},
                    startAdornment: <InputAdornment position="start">lbs</InputAdornment>,
                }}
                variant="outlined"
            />
            <TextField
                label="# of Reps"
                id="outlined-start-adornment"
                type="number"
                inputRef = {repsRef}
                InputProps={{
                    style : {backgroundColor:"aliceblue"},
                    startAdornment: <InputAdornment  position="start"></InputAdornment>,
                }}
                variant="outlined"
            />
            
            <Button onClick={logWorkout}  variant="contained" color="primary">
                Log
            </Button>

        </Box>
    )
}

export default Logger;