import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const { logInUser } = useOutletContext();

    function updateFormData(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        logInUser(formData);
    }

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <div className="w-full max-w-xs" style={{ backgroundImage: `url(/assets/Scales.png)`, backgroundSize: 'cover', padding: '8px', borderRadius: '5px' }}> 
            <h2 className="text-xl  text-white font-semibold text-border mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={updateFormData}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    required
                    className="block w-full border border-gray-400 rounded-md py-2 px-4 mb-4"
                />
                <input
                    onChange={updateFormData}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    required
                    className="block w-full border border-gray-400 rounded-md py-2 px-4 mb-4"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
            </form>
            </div>
        </div>
    );
}

export default LoginForm;
