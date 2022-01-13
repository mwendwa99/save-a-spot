import React from 'react';
import {
    Typography, Container, Box, Grid, TextField,
    Avatar
} from '@mui/material';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import Button from '../components/Button';
import Map from '../components/Map';
import { useAuth } from '../provider/Authentication';
import { postToFireStore } from '../api/database';

const db = getFirestore();

const Home = () => {
    const { signOut } = useAuth();

    React.useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        console.log(user);
    }, []);

    const postAction = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

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
                <TextField placeholder="data" />
                <Button title="post" handleAction={() => postAction()} />
            </Box>
            <Grid continer="true">
                <Map />
            </Grid>
        </Container>
    );
}

export default Home;