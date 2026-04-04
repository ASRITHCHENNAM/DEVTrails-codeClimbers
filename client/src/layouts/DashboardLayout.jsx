import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Shield, Home, FileText, Activity, LogOut, Briefcase } from 'lucide-react';

function DashboardLayout({ onLogout, user, context }) {
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'My Policies', path: '/dashboard/policies', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Claims History', path: '/dashboard/claims', icon: <FileText className="w-5 h-5" /> },
    { name: 'Trigger Admin', path: '/dashboard/admin', icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 glass-panel border-r border-white/5 flex flex-col sticky top-0 md:h-screen z-50">
        <div className="p-6 flex flex-col items-center border-b border-white/5">
          <Shield className="w-12 h-12 text-primary mb-3" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Gig Shield</h1>
          <p className="text-xs text-primaryDark mt-1 uppercase tracking-widest font-semibold">Pro Partner Portal</p>
        </div>

        {/* User Info Snippet */}
        {user && (
          <div className="p-4 bg-surface/30 border-b border-white/5 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shadow-[0_0_10px_rgba(102,252,241,0.2)]">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{user.name}</p>
              <p className="text-xs text-textLt">{user.city} • {user.deliveryZone}</p>
            </div>
          </div>
        )}

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(102,252,241,0.05)]'
                    : 'text-textLt hover:bg-surface hover:text-white'
                }`
              }
            >
              {item.icon}
              <span className="font-medium text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 hover:text-red-300 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        <Outlet context={context} />
      </main>
    </div>
  );
}

export default DashboardLayout;
