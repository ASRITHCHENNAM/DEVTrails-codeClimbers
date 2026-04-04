import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

function MyPolicies({ policy, user }) {
  return (
    <div className="fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Active Policies</h2>
        <p className="text-textLt mt-1">Manage your active AI-generated coverage.</p>
      </div>

      {!policy ? (
         <div className="glass-panel p-8 text-center text-textLt">No active policies found.</div>
      ) : (
        <div className="glass-panel p-8 border-t-4 border-t-primary relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Briefcase className="w-48 h-48 text-white" />
           </div>
           
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-white/5 pb-8 relative z-10">
              <div>
                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Active Contract</span>
                <h3 className="text-2xl font-bold text-white mb-1">{policy.coverageType}</h3>
                <p className="text-sm text-textLt">Contract ID: {policy._id}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-textLt font-medium uppercase tracking-wider mb-1">Weekly Premium</p>
                <p className="text-4xl font-extrabold text-primary">₹{policy.weeklyPremium}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div>
                 <p className="text-xs text-textLt uppercase tracking-wider mb-1">Coverage Start Date</p>
                 <p className="font-medium text-white">{new Date(policy.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                 <p className="text-xs text-textLt uppercase tracking-wider mb-1">Geofenced Zone</p>
                 <p className="font-medium text-white">{user?.city} - {user?.deliveryZone}</p>
              </div>
              <div className="sm:col-span-2 mt-4 space-y-3">
                 <p className="text-xs text-textLt uppercase tracking-wider mb-2">Coverage Inclusions (Automated)</p>
                 <div className="flex items-center gap-2 text-sm text-textLt"><CheckCircle2 className="w-4 h-4 text-green-400"/> Heavy Rain / Flooding Alert</div>
                 <div className="flex items-center gap-2 text-sm text-textLt"><CheckCircle2 className="w-4 h-4 text-green-400"/> Extreme Heatwave (IMD Red Alert)</div>
                 <div className="flex items-center gap-2 text-sm text-textLt"><CheckCircle2 className="w-4 h-4 text-green-400"/> Severe Air Quality Index (AQI &gt; 400)</div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default MyPolicies;
