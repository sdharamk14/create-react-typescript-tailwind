import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-md shadow-2xl w-2/5">
            {/* <div className="md:w-2/5"> */}
                <h2 className="text-6xl font-bold mb-8 text-center text-gray-600">Login</h2>
                    <form className='space-y-4'>
                        <input className="h-10 w-full mb-2 px-4 border border-gray-900 outline-none focus:border-blue-400" type='email' placeholder='Email'/>
                        <input className="h-10 w-full mb-2 px-4 border border-gray-900 outline-none focus:border-blue-400" type='password' placeholder="Password"/>
                        <button className="h-10 mb-4 w-full bg-yellow-400 hover:bg-yellow-300 text-white"  type="submit">Login</button>
                    </form>
            </div>
        </div>
    )
};

export default Login;