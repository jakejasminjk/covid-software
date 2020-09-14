import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridS from './GridS';
import Grid from '@material-ui/core/Grid';

{/*<React.Fragment>
  <CssBaseline />
  <Container maxWidth="lg">
  </Container>
  </React.Fragment>*/}
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

export default function Main(props) {
  console.log(`data is: ${(props.datas)}`)
  const classes = useStyles()
  return(
  <Container maxWidth='lg'>
  <div className={classes.root}>
    <Grid container spacing={3}>
      {props.datas.map((data) => (
      <GridS key={data.hash} covid = {data}/>
    ))}
    </Grid>
  </div>
</Container>
)
}
