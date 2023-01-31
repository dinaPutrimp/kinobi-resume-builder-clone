/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import organizeResume from '../assets/undraw_organize_resume.svg';

function PublicDashboard() {
    return (
        <div className="max-w-full md:grid md:grid-cols-2 text-center md:text-left md:justify-center md:items-center p-6">
            <div className="order-last mb-14 md:mb-0">
                <img src={organizeResume} alt="oragineze_illustration" />
            </div>
            <div>
                <p className="font-medium text-2xl md:text-4xl mb-6 md:mb-10">
                    Platform
                    <span className="text-blue-800">Persiapan Karier</span>
                    {' '}
                    #1 di Asia
                </p>
                <p className="text-gray-500 mb-8 text-sm md:text-base">
                    Persiapkan karier mahasiswa universitas Anda dengan all-in-one career platform dari Kinobi. Platform kami dilengkapi dengan fitur lengkap seperti
                    <span className="italic">CV builder</span>
                    , portal lowongan kerja,
                    <span className="italic">software virtual career fair</span>
                    , dan
                    <span className="italic">program tracer study.</span>
                </p>
                <Link to="/signup" className="p-3 md:px-6 md:py-3 text-sm md:text-base bg-blue-800 font-medium text-white rounded">Get Started</Link>
            </div>
        </div>
    );
}

export default PublicDashboard;
