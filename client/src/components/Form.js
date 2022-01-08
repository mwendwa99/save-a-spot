import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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

function Form({ title, setEmail, setPassword, handleAction }) {
    const classes = useStyles();

    const login = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
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
            <Typography align='center' variant="h4">{title}</Typography>
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
            <BasicButtons type="submit" title={title} handleAction={() => handleAction()} />
            {
                title === 'Sign In' ?
                    <Typography align='center' variant="body1">Do not have an account? create one &nbsp;
                        <Link to='/register' >here</Link>
                    </Typography>
                    : title === 'Sign Up' ?
                        <Typography align='center' variant="body1">Already have an account? sign in &nbsp;
                            <Link to='/' >here</Link>
                        </Typography>
                        : null
            }
        </Box>
    );
}

export { Form };