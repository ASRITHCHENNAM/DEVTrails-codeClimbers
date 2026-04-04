import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useOutletContext } from 'react-router-dom';
import axios from 'axios';

// Layouts & Pages
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import ClaimsHistory from './pages/ClaimsHistory';
import MyPolicies from './pages/MyPolicies';
import TriggerAdmin from './pages/TriggerAdmin';

const API_URL = 'http://localhost:5000/api';

// The Data Provider Wrapper for Dashboard Routes
function DashboardWrapper({ phone, onLogout }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard/${phone}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [phone]);

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center animate-pulse text-primary font-medium tracking-widest uppercase">Loading Core Data...</div>;
  if (!data?.user) return <div className="min-h-screen flex items-center justify-center text-red-400">Error: Database connection lost or session expired.</div>;

  return (
    <DashboardLayout 
      onLogout={onLogout} 
      user={data.user} 
      context={{ data, fetchData, phone }} 
    />
  );
}

// Map the Outlet context gracefully in child components by wrapping them if they aren't using useOutletContext natively.

function OverviewRoute() {
  const { data, fetchData, phone } = useOutletContext();
  return <Overview data={data} fetchData={fetchData} phone={phone} />;
}

function ClaimsRoute() {
  const { data } = useOutletContext();
  return <ClaimsHistory claims={data.claims} />;
}

function PoliciesRoute() {
  const { data } = useOutletContext();
  return <MyPolicies policy={data.policy} user={data.user} />;
}

function AdminRoute() {
  const { phone, fetchData } = useOutletContext();
  return <TriggerAdmin phone={phone} onTriggerUpdate={fetchData} />;
}


function App() {
  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    window.location.href = '/login';
  };

  const ProtectedRoute = ({ children }) => {
    const phone = localStorage.getItem('userPhone');
    return phone ? React.cloneElement(children, { phone, onLogout: handleLogout }) : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={localStorage.getItem('userPhone') ? "/dashboard" : "/login"} replace />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><DashboardWrapper /></ProtectedRoute>}>
          {/* Nested Dashboard Routes */}
          <Route index element={<OverviewRoute />} />
          <Route path="policies" element={<PoliciesRoute />} />
          <Route path="claims" element={<ClaimsRoute />} />
          <Route path="admin" element={<AdminRoute />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
