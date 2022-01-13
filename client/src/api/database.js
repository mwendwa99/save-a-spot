import { getFirestore, collection, addDoc } from 'firebase/firestore';

// initialize firestore
const db = getFirestore();

// add data to firestore
const postToFireStore = async (collectionName, data, setMessage) => {
    switch (collectionName) {
        case collectionName === 'users': {
            try {
                // reference to collection
                const docRef = await addDoc(collection(db, collectionName), {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    id: data.id,
                    booked: data.booked,
                    numberPlate: data.plate
                });
                // setMessage('user successfully saved to db!')
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.log('error saving document to DB', error)
            }
            break;
        }
        case collectionName === 'organization': {
            break;
        }
        default: break;
    }
};

export { postToFireStore };
