import React from 'react';
import Form from './module/Form'; // Assuming the path to Form.js is correct
import './App.css';
import Dashboard from './module/dashboard'; // Assuming the path to Dashboard.js is correct
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, auth = false }) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('user:token') !== null; // Use the correct localStorage key

  if (!isLoggedIn && auth) {
    return <Navigate to="/users/sign_in" />;
  } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(location.pathname)) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/users/sign_in" element={<Form isSignInPage={true} />} />
      <Route path="/users/sign_up" element={<Form isSignInPage={false} />} />
    </Routes>
  );
}

export default App;
