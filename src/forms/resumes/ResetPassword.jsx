import { useState } from "react";
import { sendResetPassword } from "../../actions/authActions";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const handleResetPassword = async () => {
        try {
            await sendResetPassword(email);
            alert("Already sent. Please check your email!")
            setEmail("")
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div className="grid place-items-center md:py-6">
            <div className="md:w-4/12 border md:px-8 md:py-6 text-center">
                <p className="text-2xl mb-8 text-blue-900 font-medium">Reset Passoword</p>
                <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-900" placeholder="fill in with registered email..." required />
                <input type="button" value="sent reset link" onClick={handleResetPassword} className="block w-full text-sm md:text-base text-white rounded font-medium bg-dark-blue-grad p-2 cursor-pointer uppercase" />
            </div>
        </div>
    );
}

export default ResetPassword;