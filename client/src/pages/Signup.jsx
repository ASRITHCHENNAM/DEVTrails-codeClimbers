import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserPlus, ArrowRight } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', password: '', city: 'Mumbai', deliveryZone: 'Andheri East' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/auth/signup`, formData);
      localStorage.setItem('userPhone', formData.phone);
      navigate('/dashboard');
    } catch (err) {
      alert('Signup Error: ' + (err.response?.data?.details || err.response?.data?.error || err.message));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14ecc3c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm shadow-2xl"></div>
      
      <div className="relative z-10 w-full max-w-md fade-in">
        <form onSubmit={handleSubmit} className="glass-panel p-8 mt-12 mb-12">
          <div className="text-center mb-6">
            <UserPlus className="w-12 h-12 text-primary mx-auto mb-3 drop-shadow-[0_0_10px_rgba(102,252,241,0.5)]" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Partner Registration</h2>
            <p className="text-sm text-textLt mt-2">Get AI-assessed parametric coverage instantly.</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textLt mb-1">Full Name</label>
              <input required type="text" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-medium text-textLt mb-1">Phone Number</label>
                  <input required type="text" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                  <label className="block text-sm font-medium text-textLt mb-1">Password</label>
                  <input required type="password" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-textLt mb-1">City</label>
                <input required type="text" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-textLt mb-1">Delivery Zone</label>
                <input required type="text" className="w-full bg-background/50 border border-surface rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" value={formData.deliveryZone} onChange={e => setFormData({...formData, deliveryZone: e.target.value})} />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-8 bg-gradient-to-r from-primaryDark to-primary hover:from-primary hover:to-primary text-background font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all shadow-[0_0_15px_rgba(102,252,241,0.4)] hover:shadow-[0_0_25px_rgba(102,252,241,0.6)] hover:-translate-y-0.5">
            {loading ? 'AI Assessing Risk Database...' : (
              <span className="flex items-center gap-2">Generate Coverage Policy <ArrowRight className="w-5 h-5"/></span>
            )}
          </button>
          
          <p className="text-center text-sm text-textLt mt-6">
            Already have an account? <button type="button" onClick={() => navigate('/login')} className="text-primary hover:text-white font-medium underline-offset-4 hover:underline">Log in</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
