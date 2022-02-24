import React, { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
// firebase
import { getAuth } from 'firebase/auth';
// components
import Button from '../components/Button';
import Map from '../components/Map';
import NavBar from '../components/NavBar';
import assets from '../assets';
// api
import { userSignOut } from '../api/user';
// auth
import { useAuth } from '../provider/Authentication';

const Home = () => {
    const { user } = useAuth();
    const [displayName, setDisplayName] = useState('');


    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName);
        } else {
            setDisplayName('');
        }
    }, [user]);

    const logout = () => {
        userSignOut();
    };

    return (
        <Container maxWidth='xl'>
            <NavBar displayName={displayName} />
            {/* <NavBar displayName='Anonymous Person' /> */}
            <Button title="logout" handleAction={logout} />
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