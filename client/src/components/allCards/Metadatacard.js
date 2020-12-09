import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';


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
state={props.covid.state}
notes={props.covid.notes}
covid19site={props.covid.covid19site}
twitter={props.covid.twitter}
/>*/}
export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>/</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="initial" gutterBottom>
            State: {props.state}
         </Typography>
         <Typography className={classes.root} color="initial" gutterBottom>
           Twitter:
           <Link href= {props.twitter}>
           {props.twitter}
           </Link>
         </Typography>
         <Typography className={classes.root} color="initial" gutterBottom>
           Covid19Site:
           <Link href= {props.covid19Site}>
           {props.covid19Site}
           </Link>
         </Typography>
        <Typography className={classes.title} color="initial" gutterBottom>
          Notes: {props.notes}
        </Typography>


      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
