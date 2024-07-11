import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('token');
        // Optionally, you can redirect to login page or perform other actions
        alert('Logout Successful');
         window.location.href = '/'; // Example of redirecting to login page

    };

    return (
        <a href="#" onClick={handleLogout}>
            Logout
        </a>
    );
};

export default Logout;
