import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AuthAPI from '../DAL/Auth.js'

const useStyles = makeStyles((theme) => ({
    root: {
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
      },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        borderRadius: '25px',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigText:{
        fontSize:'18px',
        margin:'5px',
        textAlign:'center',
    },
    center:{
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBtn:{
        margin:'5px',
    },
  }));



function LoginModal(props) {

    const classes = useStyles();
    const rootRef = React.useRef();
    const userNameRef = React.useRef();
    const passwordRef = React.useRef();

    const registerUser = function(){
        AuthAPI.registerUser(userNameRef.current.value,passwordRef.current.value)
    }
    const loginUser = function(){
        AuthAPI.loginUser(userNameRef.current.value,passwordRef.current.value)
    }
    
    return (
        <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={props.modalOpen}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}>
            <Box className={classes.paper}>
                <div>
                    <TextField
                        label='Email'
                        className={classes.bigText}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        inputRef = {userNameRef}
                        inputProps={{style:{textAlign:'center'}}}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                            label='Password'
                            className={classes.bigText}
                            type="password"
                            inputRef = {passwordRef}
                            InputProps={{
                                startAdornment: <InputAdornment  position="start"></InputAdornment>,
                            }}
                            inputProps={{style:{textAlign:'center'}}}
                            variant="outlined"
                        />                
                </div>
                <div className={classes.center}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.bigBtn}
                        onClick= {(e)=>{
                            loginUser()
                        }}
                        >
                        Login
                    </Button>
                </div>
                <div className={classes.center}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.bigBtn}
                        onClick={(e)=>{
                            registerUser()
                        }}
                        >
                        Register
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default LoginModal;