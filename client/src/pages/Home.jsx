import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';

import Button from '../components/Button';
import Map from '../components/Map';
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
                <Button title="logout" handleAction={() => logout()} />
            </Box>
            <Grid continer="true">
                <Map />
            </Grid>
        </Container>
    );
}

export default Home;