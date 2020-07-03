import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';


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

    let handleClick = function(e){
        alert("hi")
    }

    return(
        <Box paddingTop="2vh" display="flex" justifyContent="center">

            <TextField
                label="Weight"
                id="outlined-start-adornment"
                type="number"
                InputProps={{
                    
                    startAdornment: <InputAdornment position="start">lbs</InputAdornment>,
                }}
                variant="outlined"
            />
            <TextField
                label="# of Reps"
                id="outlined-start-adornment"
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                variant="outlined"
            />
            
            <Button  variant="contained" color="primary">
                Log
            </Button>

        </Box>
    )
}

export default Logger;