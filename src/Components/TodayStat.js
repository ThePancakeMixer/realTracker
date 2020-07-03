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
  },
});



const rows = [
  createData(8, new Date().toLocaleTimeString(), 6.0, 24),
  createData(9, new Date().toLocaleTimeString(), 9.0, 37),
  createData(10, new Date().toLocaleTimeString(), 16.0, 24),
  createData(11, new Date().toLocaleTimeString(), 3.7, 67),
  createData(12, new Date().toLocaleTimeString(), 16.0, 49),
]

function TodayStat(props){

    const classes = useStyles();

    return(
      <Container>
        <Typography className={classes.topOffset}  align="center">Today's Stats</Typography>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Weight</TableCell>
                <TableCell align="center">Reps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
}

export default TodayStat;