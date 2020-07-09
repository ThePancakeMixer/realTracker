import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';
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
    fontSize:"1px"
  },
  }

function SearchBar(props) {
  const classes = makeStyles(styles);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    AuthAPI.signOut()
    handleClose()
  }

  const updateStats = (e,v) => {
    let result = dataAPI.exName_stats[v]

    if(result===undefined)
      result = []
    props.setTodaysRows(result)
    

    result = dataAPI.globalStats[v]
    if(result===undefined)
      result = []
    let result_array = Object.values(result)
    props.setGlobalRows(result_array)

  }



  return (
    <AppBar position="static" style={{backgroundColor:"aliceblue"}}>
      <Toolbar>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleSignout}>Logout</MenuItem>
      </Menu>


        <Autocomplete
          id="combo-box-demo"
          options={props.exNames}
          getOptionLabel={(option) => option}
          style={{backgroundColor:"aliceblue",width:"85%" }}
          freeSolo
          onInputChange = {(e,v) => updateStats(e,v)}
          renderOption={
              (option) => (
                <React.Fragment>
                    <Typography>{option}</Typography>
                </React.Fragment>
              )
          }
          renderInput={(params) => <TextField {...params}
          inputRef = {props.selectedExName}
          inputProps={{
            ...params.inputProps,
            style:{fontSize:"18px", textAlign:"center"},
          }} />}
      />
      </Toolbar>
    </AppBar>
  );
}



  
export default SearchBar;