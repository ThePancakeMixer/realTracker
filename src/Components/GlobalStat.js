import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableContainer from '@material-ui/core/TableContainer'



const useStyles = makeStyles({
  topOffset: {
    paddingTop: "2vh",
  },
  container: {
    maxHeight: "30vh",
    paddingTop: "1vh",
  },
});

  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

const rows = [
    createData('Past Day', 159, 6.0, 24),
    createData('Past Week', 237, 9.0, 37),
    createData('Past Month', 262, 16.0, 24),
    createData('Past Year', 305, 3.7, 67),
    createData('All-time', 356, 16.0, 49),
  ]


function GlobalStat(props){

    const classes = useStyles();

    return(
        <Container>
            <Typography className={classes.topOffset}  align="center">All-Time Stats</Typography>
            <TableContainer className={classes.container}>
              <Table stickyHeader   aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" size="small">Period</TableCell>
                    <TableCell align="center">Weight</TableCell>
                    <TableCell align="center">Reps</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center" size="small">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
    )
}

export default GlobalStat;