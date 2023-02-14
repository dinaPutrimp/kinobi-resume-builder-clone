/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getState, logout } from '../../actions/authActions';
import { AuthContext } from '../../contexts/AuthContext';
import { FirebaseResumeContext } from '../../contexts/FirebaseResumeContext';

function UserMenu(props) {
    const { authState, dispatchAuth } = useContext(AuthContext);
    const { dispatchResume } = useContext(FirebaseResumeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        dispatchAuth({
            type: 'LOGOUT',
            payload: {},
        });
        dispatchResume({
            type: 'LOGOUT',
            payload: [],
        });
    };

    const handleSendEmailVerification = () => {
        getState().then((user) => {
            user.sendEmailVerification();
            alert('Sent. Please check your email to process verification!');
        }).catch((err) => alert(err));
    };

    return (
        <div className={`${props.toggle ? 'flex' : 'hidden'} flex-col w-64 h-fit rounded shadow-2xl absolute -bottom-22 right-0 bg-white z-10`}>
            <div className="flex items-center justify-between py-3 px-3 border-b">
                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-green-400 flex justify-center items-center text-center font-medium uppercase">{props.initials}</div>
                <div>
                    <p className="text-xl font-semibold">{authState.currentUser.firstName} {authState.currentUser.lastName}</p>
                    <p className="text-xs italic text-gray-500">{authState.user.email}</p>
                </div>
                {authState.user && authState.user.emailVerified ? (
                    <i className="fa fa-check-circle text-green-500" />
                ) : (
                    <i className="fa fa-check-circle text-gray-300 cursor-pointer" onClick={handleSendEmailVerification} />
                )}

            </div>
            <div className="flex py-2 px-4 items-center text-slate-600 cursor-pointer hover:bg-sky-50" onClick={handleLogout}>
                <i className="fa fa-sign-out mr-3" />
                <p className="text-sm">Logout</p>
            </div>
        </div>
    );
}

export default UserMenu;