import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <Container maxWidth='md'>
            <Box mb={2}>
                <Typography variant='h1' align='center'>
                    Home
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Button title="logout" handleAction={() => logout()} />
            </Grid>
        </Container>
    );
}

export default Home;