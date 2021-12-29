import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import BasicButtons from './Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '0.5rem',
    },
}));

function Form() {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                pt: '0.5rem',
            }}
            noValidate
            autoComplete="off"
        >
            <div className={classes.form}>
                <Typography align='center' variant="h4">Login</Typography>
                <TextField
                    required
                    id="outlined-helperText"
                    label="Email"
                    placeholder='user@user.com'
                    autoComplete='username'
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='current-password'
                    type='password'
                    id="outlined-password-input"
                    label="Password"
                    placeholder='xyz'
                />
                <BasicButtons />
            </div>
        </Box>
    );
}

export { Form };