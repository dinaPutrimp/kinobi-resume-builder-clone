/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StepperContext } from '../contexts/StepperContext';

function StepBar() {
    const { routes } = useContext(StepperContext);
    const location = useLocation();
    // const indexOfPathname = routes.findIndex((route, index) => {
    //     return route.route === location.pathname
    // });
    // use indexof that support in ie(internet explorer)
    const indexOfPathname = routes.map((route) => route.route).indexOf(location.pathname);

    return (
        <div className="flex justify-between mb-3 bg-white shadow-md rounded-lg">
            {routes.map((route, index) => (
                <Link to={route.route} key={index} className={`${index <= indexOfPathname ? 'active' : ''} relative flex flex-col items-center flex-1 group hover:bg-stone-100 cursor-pointer stepper-item`}>
                    <div className="relative mt-5 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-stone-400 text-white mb-2 circle">{route.value}</div>
                    <div className="group-hover:text-stone-600 group-hover:font-normal mb-5 text-xs flex flex-col justify-center text-center">
                        {
                            route.name.split(' ').length === 2 ? route.name.split(' ').map((rot, idx) => (<p key={idx}>{rot}</p>)) : <p>{route.name}</p>
                        }

                    </div>
                </Link>
            ))}
        </div>
    );
}

export default StepBar;
