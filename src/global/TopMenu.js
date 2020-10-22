import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import dblogo from '../static/images/danske-bank-logo.svg';

const useStyles = makeStyles(theme => ({
    logo: {
        maxWidth: 150,
    }
}));

function TopMenu(props) {
    const classes = useStyles();

    return(
        <AppBar color="transparent" position="static" className={classes.appBar}>
            <Toolbar>
            <img src={dblogo} alt="Danks Bank" className={classes.logo} />
            <MenuItem>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="h6" className={classes.title}>
                    Contact
                </Typography>
            </MenuItem>                    
            </Toolbar>
        </AppBar>
    )
}

export default TopMenu;