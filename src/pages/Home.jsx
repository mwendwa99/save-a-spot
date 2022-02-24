import React, { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';

import { getAuth } from 'firebase/auth';

import Button from '../components/Button';
import Map from '../components/Map';
import NavBar from '../components/NavBar';
import assets from '../assets';

import { useAuth } from '../provider/Authentication';

const Home = () => {
    const [displayName, setDisplayName] = useState('');
    const { signOut } = useAuth();

    useEffect(() => {
        // async function to get user
        const getUser = async () => {
            const user = await getAuth().currentUser;
            setDisplayName(user.displayName ? user.displayName : 'Anonymous Name');
        };
        getUser();
    }, [])

    console.log('RES', displayName)
    const logout = () => {
        signOut();
    };

    return (
        <Container maxWidth='xl'>
            <NavBar displayName={displayName} />
            {/* <NavBar displayName='Anonymous Person' /> */}
            <Button title="logout" handleAction={() => logout()} />
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