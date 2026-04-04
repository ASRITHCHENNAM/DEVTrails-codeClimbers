import React from 'react';
import { CloudLightning, Activity, AlertTriangle, ShieldAlert } from 'lucide-react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function TriggerAdmin({ phone, onTriggerUpdate }) {
  const triggerEvent = async (type) => {
    try {
      const res = await axios.post(`${API_URL}/trigger`, { phone, disruptionType: type });
      alert(res.data.message);
      if(onTriggerUpdate) onTriggerUpdate();
    } catch (err) {
      if(err.response?.status === 409) {
        alert("🔒 FRAUD PREVENTION: " + err.response.data.message);
      } else {
        alert("Error triggering event: " + (err.response?.data?.details || err.message));
      }
    }
  };

  return (
    <div className="fade-in max-w-3xl">
      <div className="mb-8 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3 text-red-400 mb-2">
           <ShieldAlert className="w-8 h-8" />
           <h2 className="text-3xl font-bold tracking-tight">Admin Simulator</h2>
        </div>
        <p className="text-textLt mt-1">Hackathon Use Only: Manually simulate external public APIs firing disruption events to test the zero-touch claim processing engine.</p>
      </div>

      <div className="space-y-4">
        <button onClick={() => triggerEvent('Heavy Rain')} className="w-full glass-panel hover:bg-surface/80 p-6 rounded-xl transition-all flex justify-between items-center group cursor-pointer border-l-4 border-l-primary hover:border-primary">
          <div className="text-left">
            <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2">Heavy Rain / Cyclone <CloudLightning className="w-5 h-5 text-primary"/></h3>
            <p className="text-sm text-textLt">Simulates IMD Red Alert for your specific geofence.</p>
          </div>
          <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-background transition-colors">
            Trigger Event
          </div>
        </button>

        <button onClick={() => triggerEvent('Heatwave')} className="w-full glass-panel hover:bg-surface/80 p-6 rounded-xl transition-all flex justify-between items-center group cursor-pointer border-l-4 border-l-red-500 hover:border-red-500">
          <div className="text-left">
            <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2">Extreme Heatwave <Activity className="w-5 h-5 text-red-500"/></h3>
            <p className="text-sm text-textLt">Simulates temperature exceeding 45°C limits.</p>
          </div>
          <div className="bg-red-500/10 text-red-400 font-bold px-4 py-2 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-colors">
            Trigger Event
          </div>
        </button>

        <button onClick={() => triggerEvent('Severe AQI')} className="w-full glass-panel hover:bg-surface/80 p-6 rounded-xl transition-all flex justify-between items-center group cursor-pointer border-l-4 border-l-yellow-400 hover:border-yellow-400">
          <div className="text-left">
            <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2">Severe Air Quality <AlertTriangle className="w-5 h-5 text-yellow-400"/></h3>
            <p className="text-sm text-textLt">Simulates AQI exceeding 400 (Hazardous) in local zone.</p>
          </div>
          <div className="bg-yellow-400/10 text-yellow-400 font-bold px-4 py-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-background transition-colors">
            Trigger Event
          </div>
        </button>
      </div>
    </div>
  );
}

export default TriggerAdmin;
