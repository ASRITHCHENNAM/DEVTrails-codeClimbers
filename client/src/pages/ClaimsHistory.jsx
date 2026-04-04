import React from 'react';
import { FileText, Search, Filter } from 'lucide-react';

function ClaimsHistory({ claims = [] }) {
  return (
    <div className="fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Claims History</h2>
          <p className="text-textLt mt-1">Immutable ledger of all parametric zero-touch payouts.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textLt" />
             <input type="text" placeholder="Search claims..." className="w-full bg-surface border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-primary outline-none" />
          </div>
          <button className="bg-surface border border-white/10 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:border-primary/50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/50 border-b border-white/5 text-xs uppercase tracking-wider text-textLt">
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Trigger Type</th>
                <th className="p-4 font-medium text-right">Amount (INR)</th>
                <th className="p-4 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {claims.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-textLt">
                    <FileText className="w-8 h-8 opacity-20 mx-auto mb-2" />
                    No claims processed yet.
                  </td>
                </tr>
              ) : (
                claims.map(claim => (
                  <tr key={claim._id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-mono text-xs text-textLt">{claim._id}</td>
                    <td className="p-4 text-sm text-white">{new Date(claim.dateTriggered).toLocaleString()}</td>
                    <td className="p-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-400"></span>
                       <span className="text-sm font-medium text-white">{claim.disruptionType}</span>
                    </td>
                    <td className="p-4 text-right font-bold text-primary">₹{claim.payoutAmount}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-500/10 text-green-400 text-xs py-1 px-2.5 rounded-full border border-green-500/20">
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClaimsHistory;
