import { firebaseApp, db } from "../service/firebase";

export const createNewResume = async (currentUserId, newBlankResume) => {
    if (currentUserId) {
        const resume = await db.collection("resumes").doc(currentUserId).collection("resume").add(newBlankResume);
        return resume.id;
    }
}

export const getResumeData = async (currentUser) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").get();
}

export const updateCompleteData = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        educations: resume.educations,
        experiences: resume.experiences,
        organizations: resume.organizations,
        others: resume.others,
        personal: resume.personal,
        projectName: resume.projectName,
        modifiedAt: new Date()
    })
}

export const updatePersonalDataToFirestore = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        personal: resume.personal,
        modifiedAt: new Date()
    })
}

export const updateExperiencesDataToFirestore = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        experiences: resume.experiences,
        modifiedAt: new Date()
    })
}

export const updateEducationsDataToFirestore = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        educations: resume.educations,
        modifiedAt: new Date()
    })
}

export const updateOrganizationsDataToFirestore = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        organizations: resume.organizations,
        modifiedAt: new Date()
    })
}

export const updateOthersDataToFirestore = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        others: resume.others,
        modifiedAt: new Date()
    })
}

export const updateProjectName = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume.id).update({
        projectName: resume.projectName,
        modifiedAt: new Date()
    })
}

export const deleteResume = async (currentUser, resume) => {
    return await db.collection("resumes").doc(currentUser).collection("resume").doc(resume).delete();
}