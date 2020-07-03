import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import SearchBar from './SearchBar'
import TodayStat from './TodayStat'
import GlobalStat from './GlobalStat'
import Logger from './Logger'


function MainPage(){

    return (
        <Box  bgcolor="aliceblue"  position="absolute" top="0" left="0" width="100%" height="100%">
            <Box   bgcolor="aliceblue">
                <Container >
                    <SearchBar/>                
                </Container>
                <Container> 
                    <TodayStat/>
                </Container>
                <Container>
                    <GlobalStat/>
                </Container>
                <Container>
                    <Logger/>
                </Container>
            </Box>
        </Box>

    )
}

export default MainPage;