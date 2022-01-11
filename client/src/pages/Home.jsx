import React from 'react';
import { Typography, Container, Box, Grid, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import { useAuth } from '../provider/Authentication';

const Home = () => {
    const navigate = useNavigate();
    const { isLoading } = useAuth();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        navigate('/login');
    };

    return !isLoading ? (
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
    ) : <CircularProgress size={40} thickness={4} color='secondary' />;
}

export default Home;