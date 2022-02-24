import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { app } from "../config/firebase-config";

const auth = getAuth(app);

export const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    } catch (err) {
        return err;
    }
};

export const signUp = async (email, password, firstName, lastName, plate) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password, firstName, lastName, plate)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    } catch (err) {
        return err;
    }
};

export const userSignOut = async () => {
    try {
        await signOut(auth)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    } catch (err) {
        return err;
    }
};
