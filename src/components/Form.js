import React, { useEffect, useState, useReducer } from 'react';
// toast
import { toast } from 'react-toastify';
// mui
import { Typography, Box, TextField, CircularProgress, Paper, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
// components
import BasicButtons from './Button';
// context
import { useAuth } from '../provider/Authentication';

const initialState = {
    component: 'login',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    plate: '',
    error: '',
    loading: false,
    success: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return {
                ...state,
                component: 'register',
                loading: true,
                error: ''
            };
        case 'signin':
            return {
                ...state,
                component: 'login',
                loading: true,
                error: ''
            };
        case 'signout':
            return {
                ...state,
                loading: true,
                error: ''
            };
        default:
            return state;
    }
};

function Form({ title, setEmail, setPassword, setFirstName, setLastName, setPlate, handleAction }) {
    const { loading } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.success) {
            toast.success(`Welcome ${state.firstName}`);
        }
        if (loading) {
            return <CircularProgress />;
        }
    }, [state.success, loading]);


    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value });
    // };

    const handleSubmit = (e) => {
        if (state.component === 'signin') {
            dispatch({ type: 'signin' });
            handleAction(state);
        } else if (state.component === 'signup') {
            dispatch({ type: 'signup' });
            handleAction(state);
        }
    };

    return loading ? (<CircularProgress color='secondary' thickness={4} size={40} />)
        : (
            <Box
                // component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    pt: '0.5rem',
                }}
            // noValidate
            // autoComplete="off"
            // onSubmit={(e) => handleSubmit(e)}
            >
                <Paper>
                    <Typography align='center' variant="h4">{state.component}</Typography>
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
                    <BasicButtons
                        variant='contained'
                        handleAction={() => dispatch({ type: state.component === 'login' ? 'signup' : 'signin' })}
                        title={state.component}
                    />
                </Paper>
            </Box>
        )
}

export { Form };