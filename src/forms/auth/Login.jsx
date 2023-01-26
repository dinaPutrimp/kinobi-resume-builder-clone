import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login, loginWithGoogle } from "../../actions/authActions";
import { FirebaseResumeContext } from "../../contexts/FirebaseResumeContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { authState, dispatchAuth } = useContext(AuthContext);
    const { dispatchResume } = useContext(FirebaseResumeContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            dispatchAuth({
                type: "LOGIN",
                payload: response.user
            })

            dispatchResume({
                type: "TOGGLE_MODAL",
                payload: false
            })
        } catch (err) {
            dispatchAuth({
                type: "LOGIN_ERROR",
                payload: response.message
            })
        }
    }

    const handleLoginWithGooge = async () => {
        try {
            const response = await loginWithGoogle();
            dispatchAuth({
                type: "LOGIN",
                payload: response.user
            })
            dispatchResume({
                type: "TOGGLE_MODAL",
                payload: false
            })
        } catch (err) {
            dispatchAuth({
                type: "LOGIN_ERROR",
                payload: response.message
            })
        }
    }

    useEffect(() => {
        if (authState.user?.uid) return navigate("/user");
    }, [authState.user.uid])


    return (
        <div className="max-w-full grid md:grid-cols-2">
            <div className="bg-blue-grad p-20 relative order-last hidden md:block">
                <div className="backdrop-blur bg-white/30 p-8">
                    <p className="text-6xl lg:text-8xl text-white">Platform <span className="text-blue-700">CV Builder</span> #1 di Asia</p>
                </div>
                <small className="absolute bottom-2 right-2 text-white">Design by Edupark-Sign-up-page</small>
            </div>
            <div className="p-8 md:p-16 text-center">
                <form onSubmit={handleLogin} className="mb-10 text-left">
                    <p className="font-bold text-xl lg:text-2xl text-black mb-1">Welcome back,</p>
                    <p className="text-sm text-gray-400 mb-2">Please sign in here.</p>
                    {authState && authState.authError && authState.authError.loginError && (
                        <>
                            <small className="text-red-500 text-xs mb-6 italic">{authState.authError.loginError}</small>
                        </>
                    )}
                    <div className="mb-4">
                        <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="block font-bold text-blue-900 text-sm mb-2">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                    </div>
                    <div className="mb-6 text-right">
                        <Link to="/reset-password" className="text-blue-700 text-xs cursor-pointer">Forget password?</Link>
                    </div>
                    <input type="submit" value="Login" className="block w-full text-sm md:text-base text-white rounded font-medium bg-dark-blue-grad p-2 cursor-pointer" />
                </form>
                <span className="text-sm text-gray-400">or sign in with google account</span>
                <div className="mt-10">
                    <button className="flex justify-center items-center p-2 border w-full rounded" onClick={handleLoginWithGooge}>
                        <img className="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;