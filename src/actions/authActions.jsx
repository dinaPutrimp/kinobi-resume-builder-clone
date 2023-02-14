/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable indent */
// import firebase from 'firebase/compat/app';
// import { firebaseApp, db } from '../service/firebase';
import {
    onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
} from 'firebase/auth';
import {
    doc, setDoc, getDoc,
} from 'firebase/firestore';
import { auth, db } from '../service/firebase';

// export const login = async (email, password) => firebaseApp.auth().signInWithEmailAndPassword(email, password);
export const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);

// export const loginWithGoogle = async () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const user = await firebaseApp.auth().signInWithPopup(provider);
//     return user;
// };
export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const loginResponse = await signInWithPopup(auth, provider);
    await setDoc(doc(db, 'users', loginResponse.user.uid), {
        firstName: loginResponse.user.displayName,
        lastName: '',
        initials: loginResponse.user.displayName[0],
    });
    return loginResponse.user;
};

// export const signup = async (newUsers) => {
//     if (!newUsers) return;
//     const users = await firebaseApp.auth().createUserWithEmailAndPassword(newUsers.email, newUsers.password);
//     await db.collection('users').doc(users.user.uid).set({
//         firstName: newUsers.firstName,
//         lastName: newUsers.lastName,
//         initials: newUsers.firstName[0],
//     });
//     users.user.sendEmailVerification();
//     return users;
// };
export const signup = async (newUsers) => {
    if (!newUsers) return;
    const signupResponse = await createUserWithEmailAndPassword(auth, newUsers.email, newUsers.password);
    await setDoc(doc(db, 'users', signupResponse.user.uid), {
        firstName: newUsers.firstName,
        lastName: newUsers.lastName,
        initials: newUsers.firstName[0],
    });
    return signupResponse;
};

// export const logout = async () => firebaseApp.auth().signOut();
export const logout = () => signOut(auth);

// export const getState = async () => new Promise((resolve) => {
//     firebaseApp.auth().onAuthStateChanged(resolve);
// });
export const getState = async () => {
    onAuthStateChanged(auth, (user) => user);
};

export const getUserData = async (uid) => {
    const docReference = doc(db, 'users', uid);
    const docSnapshoot = await getDoc(docReference);
    return docSnapshoot;
};

// export const getUserData = async (uid) => db.collection('users').doc(uid).get();

// export const sendResetPassword = async (email) => firebaseApp.auth().sendPasswordResetEmail(email);
export const sendResetPassword = async (email) => {
    await sendResetPassword(auth, email);
    return ('Password reset link sent!');
};
