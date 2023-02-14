/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable indent */
import {
    collection, addDoc, query, where, getDocs, doc, updateDoc, serverTimestamp, deleteDoc,
} from 'firebase/firestore';
import { db } from '../service/firebase';

// export const createNewResume = async (currentUserId, newBlankResume) => {
//     if (currentUserId) {
// eslint-disable-next-line max-len
//         const resume = await db.collection('resumes').doc(currentUserId).collection('resume').add(newBlankResume);
//         return resume.id;
//     }
// };
export const createNewResume = async (newBlankResume) => {
    const docReference = await addDoc(collection(db, 'resumes'), {
        ...newBlankResume,
        createdAt: serverTimestamp(),
        modifiedAt: serverTimestamp(),
    });
    return docReference.id;
};

// eslint-disable-next-line max-len
// export const getResumeData = async (currentUser) => db.collection('resumes').doc(currentUser).collection('resume').get();
export const getResumeData = async (currentUser) => {
    const customQuery = query(collection(db, 'resumes'), where('uid', '==', currentUser));
    const docSnapshoot = getDocs(customQuery);
    return docSnapshoot;
};

// eslint-disable-next-line max-len
// export const updateCompleteData = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         educations: resume.educations,
//         experiences: resume.experiences,
//         organizations: resume.organizations,
//         others: resume.others,
//         personal: resume.personal,
//         projectName: resume.projectName,
//         modifiedAt: new Date(),
//     });
export const updateCompleteData = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        educations: resume.educations,
        experiences: resume.experiences,
        organizations: resume.organizations,
        others: resume.others,
        personal: resume.personal,
        projectName: resume.projectName,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updatePersonalDataToFirestore = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         personal: resume.personal,
//         modifiedAt: new Date(),
//     });
export const updatePersonalDataToFirestore = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        personal: resume.personal,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updateExperiencesDataToFirestore = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         experiences: resume.experiences,
//         modifiedAt: new Date(),
//     });
export const updateExperiencesDataToFirestore = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        experiences: resume.experiences,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updateEducationsDataToFirestore = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         educations: resume.educations,
//         modifiedAt: new Date(),
//     });
export const updateEducationsDataToFirestore = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        educations: resume.educations,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updateOrganizationsDataToFirestore = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         organizations: resume.organizations,
//         modifiedAt: new Date(),
//     });
export const updateOrganizationsDataToFirestore = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        organizations: resume.organizations,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updateOthersDataToFirestore = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         others: resume.others,
//         modifiedAt: new Date(),
//     });
export const updateOthersDataToFirestore = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        others: resume.others,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const updateProjectName = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume.id)
//     .update({
//         projectName: resume.projectName,
//         modifiedAt: new Date(),
//     });
export const updateProjectName = async (resume) => {
    const docReference = doc(db, 'resumes', resume.id);
    await updateDoc(docReference, {
        projectName: resume.projectName,
        modifiedAt: serverTimestamp(),
    });
};

// eslint-disable-next-line max-len
// export const deleteResume = async (currentUser, resume) => db.collection('resumes').doc(currentUser).collection('resume').doc(resume)
//     .delete();
export const deleteResume = async (resume) => {
    const docReference = doc(db, 'resumes', resume);
    await deleteDoc(docReference);
};

// export const accessResumeWithoutAuthorized = async () => db.collection('resumes').get();
