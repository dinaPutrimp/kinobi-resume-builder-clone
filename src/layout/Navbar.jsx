/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { getUserData } from '../actions/authActions';
import { FirebaseResumeContext } from '../contexts/FirebaseResumeContext';
import { getResumeData } from '../actions/resumeActions';
import UserMenu from './popup/UserMenu';

function NavBar(props) {
    const { authState, dispatchAuth } = useContext(AuthContext);
    const { dispatchResume } = useContext(FirebaseResumeContext);
    const link = authState.user?.uid ? '/user' : '/';

    const handleToggleUser = (e) => {
        e.stopPropagation();
        props.toggle();
    };

    useEffect(() => {
        if (authState.user.uid) {
            if (authState.user.displayName === null) {
                getUserData(authState.user.uid).then((response) => {
                    if (response) {
                        dispatchAuth({
                            type: 'CURRENT_USER',
                            payload: response.data(),
                        });
                    }
                }).catch((err) => {
                    dispatchAuth({
                        type: 'FETCH_ERROR',
                        payload: err.message,
                    });
                });
            } else {
                dispatchAuth({
                    type: 'CURRENT_USER',
                    payload: {},
                });
            }
            getResumeData(authState.user.uid).then((resumes) => {
                resumes.forEach((resume) => {
                    if (resume) {
                        dispatchResume({
                            type: 'FETCH_RESUME',
                            payload: {
                                id: resume.id,
                                ...resume.data(),
                            },
                        });
                    }
                });
            }).catch((err) => {
                dispatchResume({
                    type: 'FETCH_ERROR',
                    payload: err.message,
                });
            });
        }
    }, [authState.user?.uid]);

    return (
        <div className="w-full bg-white flex justify-between px-6 py-6 shadow-md">
            <Link to={link} className="text-2xl md:text-4xl font-semibold text-blue-900">Kinobi Clone</Link>
            <div className="flex justify-around items-center">
                {authState && authState.user.uid
                    ? authState.user.displayName === null
                        ? (
                            <div className="relative">
                                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-green-400 flex justify-center items-center text-center mr-4 font-medium uppercase cursor-pointer" onClick={handleToggleUser}>{authState.currentUser.initials}</div>
                                <UserMenu toggle={props.toggleValue} initials={authState.currentUser.initials} />
                            </div>
                        )
                        : (
                            <div className="relative">
                                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-green-400 flex justify-center items-center text-center mr-4 font-medium uppercase cursor-pointer" onClick={handleToggleUser}>{authState.user.displayName[0]}</div>
                                <UserMenu toggle={props.toggleValue} initials={authState.user.displayName[0]} />
                            </div>
                        )
                    : (
                        <>
                            <Link to="/signup" className="cursor-pointer mr-4 px-3 md:px-4 py-1 border-2 border-blue-900 rounded text-blue-900 text-sm md:text-base font-semibold">SignUp</Link>
                            <Link to="/login" className="cursor-pointer px-3 md:px-4 py-1 border-2 border-blue-900 rounded text-blue-900 text-sm md:text-base font-semibold">Login</Link>
                        </>
                    )}
            </div>
        </div>
    );
}

export default NavBar;
