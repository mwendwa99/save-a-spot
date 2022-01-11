import { getFireStore, collection, addDoc } from 'firebase/firestore';

// initialize firestore
const db = getFireStore();

// add data to firestore
const postToFireStore = async (collectionName, setMessage) => {
    try {
        // reference to collection
        const docRef = await addDoc(collection(db, collectionName), {
            firstName: "",
            lastName: "",
            id: "",
            booked: false,
            numberPlate: ''
        });
        // setMessage('user successfully saved to db!')
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log('error saving document to DB', error)
    }
};

export { postToFireStore };
