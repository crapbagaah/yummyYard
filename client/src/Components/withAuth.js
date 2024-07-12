// src/components/withAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const token = localStorage.getItem('token');
    return token ? <Component {...props} /> : <Navigate to="/log_signup" replace />;
  };
};

export default withAuth;
