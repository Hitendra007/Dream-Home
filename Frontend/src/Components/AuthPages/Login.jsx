import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/signup');
    };

    return (
        <div className="m-auto w-fit  md:w-1/2 text-center p-4 ">
            <h1 className="font-bold text-white text-2xl mb-4">Login Form</h1>
            <form className="flex flex-col gap-2 justify-center items-center">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-white border border-amber-500 p-2 rounded-sm w-full md:w-1/2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-white border border-amber-500 p-2 rounded-sm w-full md:w-1/2"
                />
                <button className="w-full md:w-1/2 bg-amber-500 text-white p-2 rounded-sm">Submit</button>
            </form>
            <p
                onClick={handleNavigate}
                className="text-white text-left w-full m-auto md:w-1/2 cursor-pointer"
            >
                New User, Register Here
            </p>
        </div>
    );
}

export default Login;
