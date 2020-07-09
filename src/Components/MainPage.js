import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar'
import TodayStat from './TodayStat'
import GlobalStat from './GlobalStat'
import Logger from './Logger'
import LoginModal from './LoginModal'
import AuthAPI from '../DAL/Auth.js'
import axios from 'axios'
import { request } from 'http';
import dataAPI from '../DAL/Logger'




const useStyles = makeStyles({
    topOffset: {
        display: 'flex',
        justifyContent: 'center',
    },
  });


function MainPage(){

    const classes = useStyles();
    let [modalOpen,setModalOpen] = React.useState(true);
    let [exNames,setExNames] = React.useState();
    let [todayRows, setTodaysRows] = React.useState([])
    let [globalRows, setGlobalRows] = React.useState([])

    let selectedExName = React.useRef();

    const updateStatsFromAPI = () => {
        let selectedExcercise = selectedExName.current.value;
        let result = dataAPI.exName_stats[selectedExcercise]
        if(result===undefined)
            return
        setTodaysRows(result)
      }
    const updateGlobalStatsFromAPI = () => {
        let selectedExcercise = selectedExName.current.value;
        let result = dataAPI.globalStats[selectedExcercise]
        if(result===undefined)
            return
        let result_arr = Object.values(result);
        setGlobalRows(result_arr)
    }
    

    React.useEffect(()=>{
        AuthAPI.firebase.auth().onAuthStateChanged(async function(user){
            if(user)
            {
                axios.defaults.headers.common['Authorization'] = await user.getIdToken(true);
                dataAPI.getWorkoutInfo(setExNames)
                setModalOpen(false);
            }
            else{
                setModalOpen(true);
            }
        })
        dataAPI.setAllTimeRows = setGlobalRows
        dataAPI.setTodayData = updateStatsFromAPI;
        dataAPI.updateGlobalStatsFromAPI = updateGlobalStatsFromAPI
        dataAPI.setExNames = setExNames;
    },[])

    return (

        <Box className={classes.topOffset}  bgcolor="lightblue"  position="absolute" top="0" left="0" width="100%" height="100%">
            <LoginModal  modalOpen={modalOpen}  />
            <Box bgcolor="lightblue" marginTop="25px">
                <Container >
                    <SearchBar setTodaysRows={setTodaysRows} setGlobalRows={setGlobalRows} exNames={exNames} selectedExName={selectedExName}/>                
                </Container>
                <Container> 
                    <TodayStat todayRows={todayRows} />
                </Container>
                <Container>
                    <GlobalStat globalRows={globalRows}/>
                </Container>
                <Container>
                    <Logger selectedExName={selectedExName}/>
                </Container>
            </Box>
        </Box>

    )
}

export default MainPage;