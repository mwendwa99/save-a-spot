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

    React.useEffect(() => {
        async function getUser() {
            const user = await getAuth();
            setCurrentUser(user.currentUser);
        }
        getUser();
        console.log('display name', currentUser.displayName);
    }, [currentUser]);

    const logout = () => {
        signOut();
    };

    return (
        <Container maxWidth='xl'>
            <NavBar displayName={currentUser.displayName} />
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