import React, { useState, useEffect } from 'react';
import { ShieldCheck, CloudLightning, Activity, AlertTriangle, CloudRain, ThermometerSun } from 'lucide-react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function Overview({ data, fetchData, phone }) {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      if (!data?.user?.city) return;
      setWeatherLoading(true);
      try {
        const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${data.user.city}&count=1`);
        if (!geoRes.data.results || geoRes.data.results.length === 0) return;
        
        const { latitude, longitude } = geoRes.data.results[0];
        const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        setWeather(weatherRes.data.current_weather);
      } catch (err) {
        console.error("Failed to fetch live weather", err);
      } finally {
        setWeatherLoading(false);
      }
    }
    fetchWeather();
  }, [data?.user?.city]);

  const getRiskStatus = () => {
    if (!weather) return { label: 'Unknown', color: 'text-textLt', bg: 'bg-white/5', score: 0 };
    const temp = weather.temperature;
    const code = weather.weathercode;

    if (temp > 42 || code > 60) return { label: 'Extreme Risk', color: 'text-red-400', bg: 'bg-red-500/10', score: 92 };
    if (temp > 35 || code > 50) return { label: 'Elevated Risk', color: 'text-yellow-400', bg: 'bg-yellow-500/10', score: 65 };
    return { label: 'Stable', color: 'text-green-400', bg: 'bg-green-500/10', score: 24 };
  };

  const risk = getRiskStatus();

  if (!data?.user) return null;

  return (
    <div className="fade-in space-y-6">
      <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h2>
          <p className="text-textLt mt-1">Real-time stats for your coverage boundary.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Active Policy Snapshot */}
        <div className="glass-panel p-8 relative overflow-hidden group border-primary/20 bg-primary/5">
          <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 cursor-default">
            <ShieldCheck className="w-32 h-32 text-primary" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Coverage Status</h3>
          <p className="text-5xl font-extrabold text-white mb-2 tracking-tight">₹{data.policy?.weeklyPremium || '--'}<span className="text-2xl text-textLt font-normal">/wk</span></p>
          <p className="text-sm text-textLt mb-8 max-w-[200px]">Premium generated dynamically by AI Risk Assessment Core.</p>
          
          <div className="bg-green-500/10 text-green-400 text-xs py-1.5 px-4 rounded-full inline-flex items-center gap-2 border border-green-500/20 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]"></span> Scanning {data.user.deliveryZone} for Triggers
          </div>
        </div>

        {/* Dynamic Weather & Stats Column */}
        <div className="space-y-4">
           {/* Live Weather Integration */}
           <div className="glass-panel p-6 border-blue-400/20 bg-blue-500/5 relative overflow-hidden">
             <div className="flex justify-between items-start mb-4 relative z-10">
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <CloudRain className="w-4 h-4" /> Live Geofence Weather
                  </h3>
                  <p className="text-xs text-textLt mt-1">{data.user.city} Monitoring Node</p>
               </div>
               {weatherLoading && <span className="text-xs text-blue-400 animate-pulse">Syncing APIs...</span>}
             </div>

             <div className="flex items-end gap-4 relative z-10">
                {weather ? (
                  <>
                    <div className="flex items-end gap-1">
                      <ThermometerSun className="w-8 h-8 text-yellow-400 mb-1" />
                      <span className="text-4xl font-bold text-white tracking-tighter">{weather.temperature}°</span>
                    </div>
                    <div className="mb-1 text-sm text-textLt font-medium">
                       Condition Code: {weather.weathercode} <br/>
                       <span className="text-xs">Wind: {weather.windspeed} km/h</span>
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-textLt">Weather data unavailable API blocked locally.</div>
                )}
             </div>
           </div>

           {/* Quick Stats */}
           <div className="glass-panel p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-textLt font-medium uppercase tracking-wider mb-1">Total Vault Payouts</p>
                <p className="text-3xl font-bold text-white">₹{data.claims?.reduce((acc, c) => acc + c.payoutAmount, 0) || 0}</p>
              </div>
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-primaryDark" />
              </div>
           </div>
           
           <div className="glass-panel p-6 border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-3 text-red-400 mb-4">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="font-semibold tracking-wide uppercase text-xs">AI Risk Assessment</h3>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                 <span className="text-sm text-textLt">Regional Risk Score</span>
                 <span className={`text-sm font-bold ${risk.color}`}>{risk.score}/100</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-4">
                 <div 
                   className={`h-full transition-all duration-1000 ${risk.score > 80 ? 'bg-red-500' : risk.score > 50 ? 'bg-yellow-500' : 'bg-green-500'}`} 
                   style={{ width: `${risk.score}%` }}
                 />
              </div>
              <p className="text-xs text-textLt leading-relaxed italic">
                {risk.score > 50 
                  ? "Parametric triggers are approaching threshold. Payouts may initiate automatically." 
                  : "Atmospheric conditions within safe operating parameters."}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
