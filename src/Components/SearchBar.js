import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    fontSize:"1px"
  },
  }

function SearchBar() {
  const classes = makeStyles(styles);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={exNames}
      getOptionLabel={(option) => option.exName}
      style={{ }}
      selectOnFocus
      freeSolo
      renderOption={
          (option) => (
            <React.Fragment>
                <Typography className={classes.resize}>{option.exName}</Typography>
            </React.Fragment>
          )
      }
      renderInput={(params) => <TextField {...params}
      inputProps={{
        ...params.inputProps,
        style:{fontSize:"18px", textAlign:"center"}
      }} />}
    />
  );
}


const exNames = [
    { exName: 'Chest Press'},
  ];
  
export default SearchBar;