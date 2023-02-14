/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore';
// import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA1v2fVb4jZ_koDsYfxVCduguhCI4JlgpM',
    authDomain: 'kinobi-clone.firebaseapp.com',
    projectId: 'kinobi-clone',
    storageBucket: 'kinobi-clone.appspot.com',
    messagingSenderId: '334154644743',
    appId: '1:334154644743:web:069a7bbe4105194d8659a2',
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// const db = firebase.firestore();

export { auth, db };

// Initialize Firebase
// class Firebase {
//     constructor() {
//         firebase.initializeApp(firebaseConfig);
//         this.auth = firebase.auth();
//         this.db = firebase.firestore();
//     }

//     async login(email, password) {
//         const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
//             console.log(err);
//             return err;
//         })

//         return user;
//     }

//     async signup(newUsers) {
//         if (!newUsers) return;
//         try {
//             const users = await firebase.auth().createUserWithEmailAndPassword(newUsers.email, newUsers.password);
//             const response = await this.db.collection("users").doc(users.user.uid).set({
//                 firstName: newUsers.firstName,
//                 lastName: newUsers.lastName,
//                 initials: newUsers.firstName[0]
//             });
//             return users;
//         } catch (err) {
//             console.log(err);
//             return err;
//         }
//     }

//     async logout() {
//         const logout = await firebase.auth().signOut().catch(err => {
//             console.log(err);
//             return err;
//         })

//         return logout;
//     }

//     async getState() {
//         return new Promise(resolve => {
//             firebase.auth().onAuthStateChanged(resolve);
//         })
//     }

//     async getUserData(uid) {
//         return this.db.collection("users").doc(uid).get();
//     }
// }

// export default new Firebase();
