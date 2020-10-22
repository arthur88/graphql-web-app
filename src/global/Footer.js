import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        fontSize: "0.7rem",
        padding: "10px 0",
        textAlign: "right",
        top: "auto",
        bottom:0,
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.footer}>
            <Toolbar>
            <Typography 
                variant="h6" 
                className={classes.footer}>
                &copy; Copyright {(new Date().getFullYear())}
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;