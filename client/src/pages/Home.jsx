import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth='md'>
            <Box mb={2}>
                <Typography variant='h1' align='center'>
                    Home
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h2' align='center'>
                        Home
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;