import React from 'react';
import { Container, Box, Grid } from '@mui/material';

import { getAuth } from 'firebase/auth';

import Button from '../components/Button';
import Map from '../components/Map';
import NavBar from '../components/NavBar';
import assets from '../assets';

import { useAuth } from '../provider/Authentication';

const Home = () => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const { signOut } = useAuth();
    const user = getAuth();

    React.useEffect(() => {
        // let email = user.email;
        // setCurrentUser(user);
        console.log('zisss', user.currentUser);
    }, [user])

    const logout = () => {
        signOut();
    };

    return (
        <Container maxWidth='xl'>
            <NavBar currentUser={currentUser} />
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