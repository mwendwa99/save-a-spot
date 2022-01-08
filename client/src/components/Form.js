import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import BasicButtons from './Button';
import { useAuth } from '../provider/Authentication';

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
    const { signIn } = useAuth();

    const login = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password);
    };

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
            onSubmit={(e) => login(e)}
        >
            <Typography align='center' variant="h4">Login</Typography>
            <TextField
                required
                id="email"
                label="email"
                placeholder='user@user.com'
                autoComplete='username'
            />
            <TextField
                fullWidth
                required
                autoComplete='current-password'
                type='password'
                id="password"
                label="password"
                placeholder='xyz'
            />
            <BasicButtons type="submit" />
        </Box>
    );
}

export { Form };