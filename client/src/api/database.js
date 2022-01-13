import { getFirestore, collection, addDoc, } from 'firebase/firestore';

// initialize firestore
const db = getFirestore();

// add data to firestore
const postToFireStore = async (collectionName, data) => {
    switch (collectionName) {
        case 'users': {
            try {
                // reference to collection
                const docRef = await addDoc(collection(db, collectionName), data);
                // setMessage('user successfully saved to db!')
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.log('error saving document to DB', error)
            }
            break;
        }
        case 'organization': {
            break;
        }
        default: break;
    }
};

export { postToFireStore };
