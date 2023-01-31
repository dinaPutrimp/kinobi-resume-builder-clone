/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable indent */
import firebase from 'firebase/compat';
import { firebaseApp, db } from '../service/firebase';

export const login = async (email, password) => firebaseApp.auth().signInWithEmailAndPassword(email, password);

export const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await firebaseApp.auth().signInWithPopup(provider);
    return user;
};

export const signup = async (newUsers) => {
    if (!newUsers) return;
    const users = await firebaseApp.auth().createUserWithEmailAndPassword(newUsers.email, newUsers.password);
    await db.collection('users').doc(users.user.uid).set({
        firstName: newUsers.firstName,
        lastName: newUsers.lastName,
        initials: newUsers.firstName[0],
    });
    users.user.sendEmailVerification();
    return users;
};

export const logout = async () => firebaseApp.auth().signOut();

export const getState = async () => new Promise((resolve) => {
    firebaseApp.auth().onAuthStateChanged(resolve);
});

export const getUserData = async (uid) => db.collection('users').doc(uid).get();

export const sendResetPassword = async (email) => firebaseApp.auth().sendPasswordResetEmail(email);
