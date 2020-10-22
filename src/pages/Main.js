
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Grid, Paper, Typography, Button } from '@material-ui/core';
import cover from '../static/images/cover.jpg';

const useStyles = makeStyles(theme => ({

    main: {
        marginTop: 50
    }, 
    card: {
        width: "100%",
        fontStyle: "italic",
        color: theme.palette.white,
        backgroundColor: theme.palette.primary.main,
        minHeight: "400px",
    },
    cardMedia: {
        width: "100%",
        display: "block",
        minHeight: "400px",
    },
    customBtn: {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.02) 7%,rgba(255,255,255,0) 50%,rgba(255,255,255,.12) 100%)",
        marginTop: 20,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        fontStyle: "normal",
        minHeight: "48px",
        padding: "15px 32px",
        lineHeight: "1.1rem",
        fontSize: "1rem",
        textTransform: "Capitalize",
        Outline:0,
        borderRadius: "1000px",
        fontWeight: 300,
    },
}));


function Main() {
    const classes = useStyles();

    return(
        <main className={classes.main}>
            <Grid container justify="center" alignItems="center" spacing={1}>
                <Grid item xs={12} sm={8} style={{paddingLeft: 0, paddingRight:0}}> 
                    <Paper className={classes.paper}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={cover}
                        />
                    </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} style={{paddingLeft: 0, paddingRight:0}}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography 
                                 paragraph={true}
                                 variant="h4" component="h2">
                                Important notice of changes in your customer relationship with Danske Bank
                                </Typography>
                                <Typography
                                 variant="body2"
                                 component="p" >
                                    Applies to all Danske Bank business customers in Lithuania
                                </Typography>
                                <Button 
                                    target="_blank" 
                                    color="primary"
                                    variant="contained"
                                    className={classes.customBtn}
                                    disableElevation
                                    href="http://www.danskebank.lt/en/about-the-bank/footer/changes-to-services">
                                    Read more
                                </Button>
                            </CardContent>
                        </Card>
                    
                    </Paper>
                </Grid>
                <Grid item xs={12}><br/></Grid>
                <Grid item xs={12} sm={6} >
                <div className={classes.toolbar} />
            <div className={classes.title}>
                <Typography variant="h6">Validation Form</Typography>
            </div>
            <div className={classes.content}>
                <Typography paragraph>
                Below is the form that only accepts 1 - 10 numeric values                 
                </Typography>
            </div>
                </Grid>
            </Grid>
        </main>
    );
}

export default Main;