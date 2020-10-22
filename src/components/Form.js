import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },    
}));

const MatForm = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        helperText: '',
        error: false,
        isChange: false
    });
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {

        if(!(state.helperText) && !(state.isChange) && !(state.error)) {
            setIsDisabled(true);
        } 

        if(!(state.helperText) && !!(state.isChange) && !(state.error)) {
            setIsDisabled(false);
        } 

        if(!!(state.helperText) && !!(state.isChange) && !!(state.error)) {
            setIsDisabled(true);
        } 


    }, [state])
    
    const handleChange = (event) => {

       if(event.target.value < 0 || event.target.value > 10) {
           setState({helperText: 'Must be numeric value between 1 - 10', error: true, isChange: true});
       } else {
        setState({helperText: '', error: false, isChange: true})
       }


       // setState({...state, [event.target.id]: event.target.value})
    }

    return (
        <Paper>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                name="numValue"
                id="numValue" 
                error={ state.error === true ? true : false }
                helperText={state.helperText}
                label="Please enter between 1 - 10" 
                inputProps={{ min: 1, max: 10}}
                required
                maxLength={2}
                type="number"
                className={classes.TextField}
                onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)
                }}  
                
                onChange={handleChange}
            />
            <Button 
             variant="contained"
             color="secondary"
             disabled={isDisabled}
            >
            Submit
            </Button>
        </form>
        </Paper>
    )
}

export default MatForm









