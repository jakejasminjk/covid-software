import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

let p = '';
let t = '';
let c = '';
let s ='';
let name = '';

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

export default function RadioButtonsGroup(props) {
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Complete the form');
    const classes = useStyles();
    name = props.name;

    function onSubmit(e){
        e.preventDefault();
        // Check if not empty on submission
        //could hash the password here
        if(t == ''){
            setHelperText('Must enter Temperature')
            setError(true)
        }
        else if(name == ''){
            setHelperText('Please log in to submit')
            setError(true)
        }
        else{
            props.handleScreen(name,p,t,c,s);
        }
    }

  const handleP = (e) => {
    p = e.target.value
  };

  const handleT = (e) => {
    t = e.target.value
  };

  const handleC = (e) => {
    c = e.target.value
  };

  const handleS = (e) => {
    s = e.target.value
  };

  return (
    <form className={classes.form} noValidate onSubmit={onSubmit}>
    <FormHelperText>{helperText}</FormHelperText>
    <FormControl component="fieldset" error = {error}>
      <FormLabel component="legend">Have you tested positive for COVID-19 in the last 30 days?</FormLabel>
      <RadioGroup aria-label="Tested" name="Tested" value="no" onChange={handleP}>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      error = {error}
      id="temperature"
      label="Temperature"
      name="temperature"
      type="text"
      onChange={handleT}
    />
    <FormControl component="fieldset" error = {error}>
      <FormLabel component="legend">Have you been in contact with someone who has recently been
      diagnosed with COVID-19, or has experienced multiple symptoms such as coughing,
      fever, shortness of breath, or loss of taste and/or smell?</FormLabel>
      <RadioGroup aria-label="Contact" name="Contact" value="no" onChange={handleC}>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset" error = {error}>
      <FormLabel component="legend">Have you experienced any symptoms of COVID-19, such as coughing, fever, shortness
       of breath, or loss of taste and/or smell?  Please select "No" if these symptoms stem
       from a preexisting condition.</FormLabel>
      <RadioGroup aria-label="Symptoms" name="Symptoms" value="no" onChange={handleS}>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <FormHelperText>{helperText}</FormHelperText>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Submit
    </Button>
    </form>
  );
}
