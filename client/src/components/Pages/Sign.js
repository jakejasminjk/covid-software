import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Hackathon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
let stateName = '';
let statePassword = '';

export default function SignIn(props) {
  const classes = useStyles();
  function onSubmit(e){
    e.preventDefault();
    if(stateName == '' || statePassword == '' ){
        props.handleSignIn(stateName, statePassword);
        console.log(stateName, statePassword)
    }
  }

  function onChange(e){
    stateName = e.target.value
    console.log(stateName)
  }

  function onPchange(e){
    //hash Password
    statePassword = e.target.value
    console.log(statePassword)
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddLocationRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          SignUp
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            type="text"
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="text"
            onChange={onPchange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot Username?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
