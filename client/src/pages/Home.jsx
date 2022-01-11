import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Map from '../components/Map';

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <Container maxWidth='xl'>
            <Box mb={2}>
                <Typography variant='h6' align='center'>
                    Home
                </Typography>
                <Button title="logout" handleAction={() => logout()} />
            </Box>
            <Grid continer>
                <Map />
            </Grid>
        </Container>
    );
}

export default Home;