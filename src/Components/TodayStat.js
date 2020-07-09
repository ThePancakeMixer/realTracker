import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableContainer from '@material-ui/core/TableContainer'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  topOffset: {
    paddingTop: "2vh",
  },
  container: {
    maxHeight: "30vh",
    paddingTop: "1vh",
    backgroundColor: 'aliceblue'
  },
});


function TodayStat(props){

    const classes = useStyles();

    return(
      <Container>
        <Typography className={classes.topOffset}  align="center">Today's Stats</Typography>
        <TableContainer className={classes.container} component={Paper}>
          <Table  aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Weight</TableCell>
                <TableCell align="center">Reps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.todayRows.map((row) => (
                <TableRow>
                  <TableCell align="center">{new Date(row.date).toLocaleTimeString()}</TableCell>
                  <TableCell align="center">{row.weight}</TableCell>
                  <TableCell align="center">{row.reps}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
}

export default TodayStat;