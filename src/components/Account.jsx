import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEdited, setIsEdited] = useState(false);

    // Fetch user data from local storage on component mount
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setEmail(userData.email || '');
            setName(userData.name || '');
        } else {
            // Redirect to login if no user data found
            toast.error('Please log in first');
            navigate('/');
        }
    }, [navigate]);

    // Handle update of user details
    const handleUpdate = () => {
        // Validate inputs
        if (!name.trim()) {
            toast.error('Name cannot be empty');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        try {
            // Retrieve existing user data
            const userData = JSON.parse(localStorage.getItem('userData')) || {};

            // Update user data
            const updatedUserData = {
                ...userData,
                name: name.trim(),
                email: email.trim()
            };

            // Save updated data to local storage
            localStorage.setItem('userData', JSON.stringify(updatedUserData));

            // Show success toast
            toast.success('Account details updated successfully');

            // Reset edited state
            setIsEdited(false);
        } catch (error) {
            toast.error('Failed to update account details');
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('isAuthenticated');
            toast.success('Logged out successfully!');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            toast.error('Failed to logout!')
        }
    }

    return (
        <div className="container mt-5">
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

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="mb-0">Account Details</h3>
                        </div>
                        <div className="card-body p-4">
                            <div className="mb-4">
                                <label htmlFor="emailInput" className="form-label">Email Address</label>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        id="emailInput"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setIsEdited(true);
                                        }}
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="nameInput" className="form-label">Full Name</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="nameInput"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setIsEdited(true);
                                        }}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md-6">
                                    <button
                                        type="button"
                                        className={`btn btn-${isEdited ? 'success' : 'secondary'} w-100`}
                                        onClick={handleUpdate}
                                        disabled={!isEdited}
                                    >
                                        Update Account
                                    </button>
                                </div>

                                <div className="col md-6">
                                    <button
                                        type="button"
                                        className="btn btn-danger w-100"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;