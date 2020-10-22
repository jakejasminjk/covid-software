import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
{/*<Cards
date={props.covid.date}
postive={props.covid.postive}
negative={props.covid.negative}
pending={props.covid.pending}
death={props.covid.death}
/>*/}
export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>/</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            State: {props.state}
         </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Date: {props.date}
        </Typography>
        <Typography variant="h5" component="h2">
          Deaths: {props.death || '0'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Negative: {props.negative}
        </Typography>
        <Typography variant="body2" component="p">
          Positive: {props.positive}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
