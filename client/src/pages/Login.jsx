import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Form } from '../components/Form';

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

    return (
        <Container maxWidth='md' className={classes.root}>
            <Form />
        </Container>
    );
}

export default Login;