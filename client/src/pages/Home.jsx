import React from 'react';
import { Typography, Container, Box, Grid, TextField, Avatar } from '@mui/material';

import Button from '../components/Button';
import Map from '../components/Map';
import assets from '../assets';

import { useAuth } from '../provider/Authentication';

const Home = () => {
    const { signOut } = useAuth();

    const logout = () => {
        signOut();
    };

    return (
        <Container maxWidth='xl'>
            <Box mb={2}>
                <Typography variant='h6' align='center'>
                    Home
                </Typography>
                <Avatar></Avatar>
                <Button title="logout" handleAction={() => logout()} />
            </Box>
            <Box>
                <img src={assets.map} alt="map-svg" />
            </Box>
            <Grid continer="true">
                <Map />
            </Grid>
        </Container>
    );
}

export default Home;