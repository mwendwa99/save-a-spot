import * as React from 'react';
import { Typography, Box, TextField, CircularProgress, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

import BasicButtons from './Button';
import { useAuth } from '../provider/Authentication'


function Form({ title, setEmail, setPassword, setFirstName, setLastName, setPlate, handleAction }) {
    const { isLoading } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return isLoading ? (<CircularProgress color='secondary' thickness={4} size={40} />)
        : (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    pt: '0.5rem',
                }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e)}
            >
                <Paper>
                    <Typography align='center' variant="h4">{title}</Typography>
                    <TextField
                        required
                        id="email"
                        label="email"
                        placeholder='user@user.com'
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='username'
                    />
                    {
                        title === 'Sign Up' ?
                            <>
                                <TextField
                                    required
                                    autoComplete='firstName'
                                    onChange={(e) => setFirstName(e.target.value.toUpperCase().charAt(0).slice() + e.target.value.substring(1))}
                                    type='text'
                                    id="firstName"
                                    label="first name"
                                    placeholder='John'
                                />
                                <TextField
                                    required
                                    autoComplete='lastName'
                                    onChange={(e) => setLastName(e.target.value.toUpperCase().charAt(0).slice() + e.target.value.substring(1))}
                                    type='text'
                                    id="lastName"
                                    label="last name"
                                    placeholder='Doe'
                                />
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete='number plate'
                                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                                    type='text'
                                    id="plate"
                                    label="number plate"
                                    placeholder='KBJ 334O'
                                />
                            </>
                            : null
                    }
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
                </Paper>
            </Box>
        )
}

export { Form };