import firebase from "firebase/compat";
import { firebaseApp, db } from "../service/firebase";


export const login = async (email, password) => {
    return await firebaseApp.auth().signInWithEmailAndPassword(email, password);
}

export const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await firebaseApp.auth().signInWithPopup(provider);
    return user
}

export const signup = async (newUsers) => {
    if (!newUsers) return;
    const users = await firebaseApp.auth().createUserWithEmailAndPassword(newUsers.email, newUsers.password);
    await db.collection("users").doc(users.user.uid).set({
        firstName: newUsers.firstName,
        lastName: newUsers.lastName,
        initials: newUsers.firstName[0]
    });
    users.user.sendEmailVerification();
    return users;
}

export const logout = async () => {
    return await firebaseApp.auth().signOut();
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
    return await firebaseApp.auth().sendPasswordResetEmail(email);
}
