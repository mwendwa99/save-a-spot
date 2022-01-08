import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../components/Form';
import { useAuth } from '../provider/Authentication';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'aliceblue'
    },
});

const Login = () => {
    const classes = useStyles();
    const { error } = useAuth();

    toast.error(error, { pauseOnHover: true, position: 'top-center' });

    return (
        <Container maxWidth='md' className={classes.root}>
            <ToastContainer />
            <Form />
        </Container>
    );
}

export default Login;