import React from 'react';
import { Server, Cpu, HardDrive, Network } from 'lucide-react';
import { VPS_PLANS } from '../constants';

interface ManagedVPSProps {
  isDark: boolean;
}

const ManagedVPS: React.FC<ManagedVPSProps> = ({ isDark }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold">
            <Server className="w-4 h-4" />
            Powered by Hetzner Cloud
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Managed <span className="text-orange-500">VPS</span> Powerhouses
          </h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Volledig beheerde servers voor zware applicaties. Wij regelen de updates, beveiliging en backups, jij focust op je code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VPS_PLANS.map((vps, index) => (
            <div key={index} className={`border rounded-2xl p-8 transition-all group ${
              isDark 
                ? 'bg-slate-900 border-white/10 hover:border-orange-500/30' 
                : 'bg-white border-slate-200 hover:border-orange-500/30 hover:shadow-lg'
            }`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-xl font-bold group-hover:text-orange-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{vps.name}</h3>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>Managed Cloud Server</p>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                    <Server className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-slate-400'}`} />
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                    <Cpu className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-slate-400'}`} />
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>{vps.cpu}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 flex items-center justify-center font-bold text-xs border rounded ${
                      isDark ? 'text-gray-500 border-gray-600' : 'text-slate-400 border-slate-300'
                    }`}>M</div>
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>{vps.ram}</span>
                </div>
                <div className="flex items-center gap-3">
                    <HardDrive className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-slate-400'}`} />
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>{vps.storage}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Network className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-slate-400'}`} />
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>{vps.traffic}</span>
                </div>
              </div>

              <div className={`flex items-center justify-between pt-6 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{vps.price}</div>
                <button className={`px-6 py-2 rounded-lg transition-colors font-medium text-sm ${
                  isDark 
                    ? 'bg-white/5 hover:bg-orange-500 text-white' 
                    : 'bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700'
                }`}>
                    Configureer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagedVPS;