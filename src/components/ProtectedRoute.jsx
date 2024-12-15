// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the wrapped component
    return children;
};

export default ProtectedRoute;