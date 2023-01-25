import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/authActions";
import { AuthContext } from "../../contexts/AuthContext";

const UserMenu = (props) => {
    const { authState, dispatchAuth } = useContext(AuthContext);
    const displayName = (authState.user.displayName !== null ? authState.user.displayName : authState.currentUser.firstName + " " + authState.currentUser.lastName).split(" ").map(name => name[0].toUpperCase() + name.substring(1)).join(" ");
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
        return dispatchAuth({
            type: "LOGOUT",
            payload: {}
        });
    }
    return (
        <div className={`${props.toggle ? "flex" : "hidden"} flex-col w-64 h-fit rounded shadow-2xl absolute -bottom-22 right-0 bg-white z-10`}>
            <div className="flex items-center py-3 px-3 border-b">
                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-green-400 flex justify-center items-center text-center mr-3 font-medium uppercase">{props.initials}</div>
                <div>
                    <p className="text-xl font-semibold">{displayName}</p>
                    <p className="text-xs italic text-gray-500">{authState.user.email}</p>
                </div>
            </div>
            <div className="flex py-2 px-4 items-center text-slate-600 cursor-pointer hover:bg-sky-50" onClick={handleLogout}>
                <i className="fa fa-sign-out mr-3"></i>
                <p className="text-sm">Logout</p>
            </div>
        </div>
    );
}

export default UserMenu;