import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

import BasicButtons from './Button';
import { useAuth } from '../provider/Authentication'

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
    const { isLoading } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return isLoading ? (<CircularProgress color='secondary' thickness={4} size={40} />)
        : (
            <Box
                className={classes.root}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    pt: '0.5rem',
                }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e)}
            >
                <Typography align='center' variant="h4">{title}</Typography>
                <TextField
                    required
                    id="email"
                    label="email"
                    placeholder='user@user.com'
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='username'
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    id="password"
                    label="password"
                    placeholder='xyz'
                />
                <BasicButtons type="submit" title={title} handleAction={() => handleAction()} />
                {
                    title === 'Sign In' ?
                        <Typography align='center' variant="body1">Do not have an account? create one &nbsp;
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "yellow" : "green"
                                    }
                                }}
                                to='/register' >here</NavLink>
                        </Typography>
                        : title === 'Sign Up' ?
                            <Typography align='center' variant="body1">Already have an account? sign in &nbsp;
                                <NavLink to='/login' >here</NavLink>
                            </Typography>
                            : null
                }
            </Box>
        )
}

export { Form };