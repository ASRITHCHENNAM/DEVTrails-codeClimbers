import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Shield, LogIn } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: '9988776655', password: 'password123' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/auth/login`, formData);
      localStorage.setItem('userPhone', formData.phone);
      navigate('/dashboard');
    } catch (err) {
      alert('Login Error: ' + (err.response?.data?.error || err.message));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14ecc3c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm shadow-2xl"></div>
      
      <div className="relative z-10 w-full max-w-sm fade-in">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(102,252,241,0.5)]" />
          <h1 className="text-4xl font-bold text-textAccent tracking-tight">Gig Shield</h1>
          <p className="text-primaryDark mt-2 uppercase tracking-widest text-sm font-semibold">Partner Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textLt mb-1">Phone Number</label>
              <input required type="text" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-textLt mb-1">Password</label>
              <input required type="password" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-8 bg-gradient-to-r from-primaryDark to-primary hover:from-primary hover:to-primary text-background font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all shadow-[0_0_15px_rgba(102,252,241,0.4)] hover:shadow-[0_0_25px_rgba(102,252,241,0.6)] hover:-translate-y-0.5">
            <span className="flex items-center gap-2">Access Dashboard <LogIn className="w-5 h-5"/></span>
          </button>
          
          <p className="text-center text-sm text-textLt mt-6">
            New driver? <button type="button" onClick={() => navigate('/signup')} className="text-primary hover:text-white font-medium underline-offset-4 hover:underline">Create Account</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
