import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardsState from '../allCards/Cards';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
  },
}));

export default function GridState(props) {
  const classes = useStyles();
  //console.log(`stuff is : ${JSON.stringify(props.stuff)}`)
  {/*<Paper className={classes.paper}>{props.covid.date}</Paper>*/}
  return(
    <Grid item xs={3}>
        <CardsState
        state={props.covid.state}
        date={props.covid.date}
        positive={props.covid.positive}
        negative={props.covid.negative}
        pending={props.covid.pending}
        death={props.covid.death}
      />
    </Grid>
    );
  }
