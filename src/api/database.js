import { getFirestore, collection, addDoc, } from 'firebase/firestore';
import { app } from '../config/firebase-config';
// notification
import { toast } from 'react-toastify';

// initialize firestore
const db = getFirestore(app);

// add data to firestore
export const postToFireStore = async (collectionName, data) => {
    switch (collectionName) {
        case 'users': {
            try {
                // reference to collection
                await addDoc(collection(db, collectionName), data);
                // setMessage('user successfully saved to db!')
            } catch (error) {
                console.log('error saving document to DB', error)
                toast.error(error.message);
            }
            break;
        }
        case 'organization': {
            break;
        }
        default: break;
    }
};
