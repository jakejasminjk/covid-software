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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridS from '../allGrids/GridS';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Covid Watch
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
export default function State_Search(props) {
  const handleChange = (e) => {
     props.handleSearch(e.target.value)
   };

  const classes = useStyles();

  return (
      <Container maxWidth='lg'>
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.state}
                    onChange={handleChange}
                    >
                    <MenuItem value={'Al'}>Alabama</MenuItem>
                    <MenuItem value={'AK'}>Alaska</MenuItem>
                    <MenuItem value={'AZ'}>Arizone</MenuItem>
                    <MenuItem value={'AR'}>Arkansas</MenuItem>
                    <MenuItem value={'CA'}>California</MenuItem>
                    <MenuItem value={'CO'}>Colorado</MenuItem>
                    <MenuItem value={'CT'}>Connecticut</MenuItem>
                    <MenuItem value={'DE'}>Delaware</MenuItem>
                    <MenuItem value={'FL'}>Florida</MenuItem>
                    <MenuItem value={'GA'}>Georgia</MenuItem>
                    <MenuItem value={'HI'}>Hawaii</MenuItem>
                    <MenuItem value={'ID'}>Idaho</MenuItem>
                    <MenuItem value={'IL'}>Illinois</MenuItem>
                    <MenuItem value={'IN'}>Indiana</MenuItem>
                    <MenuItem value={'IA'}>Iowa</MenuItem>
                    <MenuItem value={'KS'}>Kansas</MenuItem>
                    <MenuItem value={'KY'}>Kentucky</MenuItem>
                    <MenuItem value={'LA'}>Louisiana</MenuItem>
                    <MenuItem value={'ME'}>Maine</MenuItem>
                    <MenuItem value={'MD'}>Maryland</MenuItem>
                    <MenuItem value={'MA'}>Massachusetts</MenuItem>
                    <MenuItem value={"MI"}>Michigan</MenuItem>
                    <MenuItem value={'MN'}>Minnesota</MenuItem>
                    <MenuItem value={'MS'}>Mississippi</MenuItem>
                    <MenuItem value={'MO'}>Missouri</MenuItem>
                    <MenuItem value={'MT'}>Montana</MenuItem>
                    <MenuItem value={'NE'}>Nebraska</MenuItem>
                    <MenuItem value={'NV'}>Nevada</MenuItem>
                    <MenuItem value={'NH'}>New Hampshire</MenuItem>
                    <MenuItem value={'NJ'}>New Jersey</MenuItem>
                    <MenuItem value={'NM'}>New Mexico</MenuItem>
                    <MenuItem value={"NY"}>New York</MenuItem>
                    <MenuItem value={'NC'}>North Carolina</MenuItem>
                    <MenuItem value={'ND'}>North Dakota</MenuItem>
                    <MenuItem value={'OH'}>Ohio</MenuItem>
                    <MenuItem value={'OK'}>Oklahoma</MenuItem>
                    <MenuItem value={'OR'}>Oregon</MenuItem>
                    <MenuItem value={'PA'}>Pennslyvania</MenuItem>
                    <MenuItem value={'RI'}>Rhode Island</MenuItem>
                    <MenuItem value={'SC'}>South Carolina</MenuItem>
                    <MenuItem value={'SD'}>South Dakota</MenuItem>
                    <MenuItem value={"TN"}>Tennessee</MenuItem>
                    <MenuItem value={'TX'}>Texas</MenuItem>
                    <MenuItem value={'UT'}>Utah</MenuItem>
                    <MenuItem value={'VT'}>Vermont</MenuItem>
                    <MenuItem value={'VA'}>Virgina</MenuItem>
                    <MenuItem value={'WA'}>Washington</MenuItem>
                    <MenuItem value={'WV'}>West Virginia</MenuItem>
                    <MenuItem value={'WI'}>Wisconsin</MenuItem>
                    <MenuItem value={'WY'}>Wyoming</MenuItem>
                    </Select>

            </Grid>
          {props.datas.map((data) => (
          <GridS key={data.hash} covid = {data}/>
        ))}
        </Grid>
      </div>
    </Container>
  );
}
