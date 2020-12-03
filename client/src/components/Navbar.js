import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

let displayName = ''


export default function Navbar(props) {
  //props.name == '' ? displayName = 'Not Logged in': displayName = props.name
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogClose = () => {
    setAnchorEl(null);
    props.handleLogout();
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                <MenuIcon/>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/'>Home</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/info'>Info</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/dailyState'>DailyState</Button></MenuItem>

                <MenuItem onClick={handleClose}><Button color="inherit" href = '/#'>Metadata</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/searchState'>Search State</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/screen'>Screen</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/Metadata'>Metadata</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/Sign'>Sign Up</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button color="inherit" href = '/Login'>Login</Button></MenuItem>
                <MenuItem onClick={handleLogClose}><Button color="inherit" href = '/info'>Logout</Button></MenuItem>
            </Menu>
        </div>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid Data
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href= "/Login">
            <Typography variant="subtitle1" className={classes.title}>
                {props.Username}
            </Typography>
            <AccountBoxIcon />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href= "/">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
