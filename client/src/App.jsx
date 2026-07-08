import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import JobDetail from './pages/JobDetail';
import Navbar from './components/Navbar';

import Landing from './pages/Landing';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

export default function App() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {user && <Navbar />}
      {/* {user && location.pathname !== '/' && <Navbar />} */}
      <Routes>
        <Route path="/" element={!user ? <Landing /> : <Dashboard />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/add-job" element={<ProtectedRoute><AddJob /></ProtectedRoute>} />
        <Route path="/jobs/:id" element={<ProtectedRoute><JobDetail /></ProtectedRoute>} />
      </Routes>


      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 16,
          fontSize: 10,
          color: '#94a3b8',
          opacity: 0.8,
          zIndex: 999,
          userSelect: 'none',
        }}>
        JobTrack AI 2026  © Amit Mandal 
      </div>



    </div>
  );
}