/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signup } from "../../actions/authActions";

const SignUp = () => {
    const [submitValues, setSubmitValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { authState, dispatchAuth } = useContext(AuthContext);

    const handleChange = (e) => {
        setSubmitValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            let response = await signup(submitValues);
            return dispatchAuth({
                type: "SIGNUP",
                payload: response.user
            })
        } catch (err) {
            dispatchAuth({
                type: "SIGNUP_ERROR",
                payload: err.message
            })
        }
    }

    useEffect(() => {
        if (authState.user?.uid) return navigate("/user");
    }, [authState.user.uid])

    return (
        <div className="max-w-full grid md:grid-cols-2">
            <div className="bg-blue-grad p-16 relative hidden md:block">
                <div className="backdrop-blur bg-white/30 p-6">
                    <p className="text-6xl lg:text-8xl text-white">Platform <span className="text-blue-700">Persiapan Karir</span> #1 di Asia</p>
                </div>
                <small className="absolute bottom-2 left-2 text-white">Design by Edupark-Sign-up-page</small>
            </div>
            <form onSubmit={handleSignUp} className="p-8 md:p-16">
                <p className="font-bold text-2xl text-black mb-1">Welcome folks,</p>
                <p className="text-sm text-gray-400 mb-6">Please sign up to access more fiture!</p>
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">First Name</label>
                        <input type="text" name="firstName" onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                    </div>
                    <div>
                        <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">Last Name</label>
                        <input type="text" name="lastName" onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">Email</label>
                    <input type="email" name="email" onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">Password</label>
                    <input type="password" name="password" onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                </div>
                <button type="submit" className="block w-full text-white rounded font-medium bg-dark-blue-grad p-2">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;