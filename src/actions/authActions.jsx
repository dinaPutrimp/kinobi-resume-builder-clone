import firebase from "firebase/compat";
import { firebaseApp, db } from "../service/firebase";


export const login = async (email, password) => {
    const user = await firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(err => {
        return err;
    })

    return user;
}

export const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await firebaseApp.auth().signInWithPopup(provider).catch(err => {
        return err
    })

    return user
}

export const signup = async (newUsers) => {
    if (!newUsers) return;
    try {
        const users = await firebaseApp.auth().createUserWithEmailAndPassword(newUsers.email, newUsers.password);
        await db.collection("users").doc(users.user.uid).set({
            firstName: newUsers.firstName,
            lastName: newUsers.lastName,
            initials: newUsers.firstName[0]
        });
        users.user.sendEmailVerification();
        return users;
    } catch (err) {
        return err;
    }
}

export const logout = async () => {
    const logout = await firebaseApp.auth().signOut().catch(err => {
        return err;
    })

    return logout;
}

export const getState = async () => {
    return new Promise(resolve => {
        firebaseApp.auth().onAuthStateChanged(resolve);
    })
}

export const getUserData = async (uid) => {
    return db.collection("users").doc(uid).get();
}

export const sendResetPassword = async (email) => {
    const reset = await firebaseApp.auth().sendPasswordResetEmail(email).catch(err => console.log(err))
    return reset
}
