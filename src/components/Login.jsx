import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Retrieve user data from local storage
        const storedUserData = localStorage.getItem('userData');

        // Check if user data exists
        if (!storedUserData) {
            toast.error('No registered user found. Please sign up first.');
            return;
        }

        // Parse stored user data
        const userData = JSON.parse(storedUserData);

        // Validate email and password
        if (email === userData.email && password === userData.password) {
            // Successful login
            toast.success('Login Successful!');

            // Optional: You might want to set an authentication token or flag
            localStorage.setItem('isAuthenticated', 'true');

            // Redirect to a account page after a short delay
            setTimeout(() => {
                navigate('/account');
            }, 2000);
        } else {
            // Failed login
            if (email !== userData.email) {
                toast.error('Invalid email address');
            } else {
                toast.error('Incorrect password');
            }
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ "borderRadius": '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Enter your Email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} autoComplete='off'/>
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4 mt-2">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off'/>
                                        </div>

                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 mt-4" type="submit" onClick={handleLogin}>Login</button>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="https://user-management-phi-seven.vercel.app/register" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
