import { NavLink } from "react-router-dom";

const StepBar = () => {
    return (
        <div className="flex justify-between mb-3 bg-white shadow-md rounded-lg">
            <NavLink to='/' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">1</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs flex flex-col justify-center text-center">
                    <p>Personal</p>
                    <p>Information</p>
                </div>
            </NavLink>
            <NavLink to='/experience' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">2</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs">Experience</div>
            </NavLink>
            <NavLink to='/education' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">3</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs">Education</div>
            </NavLink>
            <NavLink to='/organisational' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">4</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs">Organisational</div>
            </NavLink>
            <NavLink to='/others' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">5</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs">Others</div>
            </NavLink>
            <NavLink to='/complete' className="relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item">
                <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">6</div>
                <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs">Complete</div>
            </NavLink>
        </div>
    );
}

export default StepBar;