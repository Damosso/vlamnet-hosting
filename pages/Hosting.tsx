import React from 'react';
import { Check, Globe } from 'lucide-react';
import { HOSTING_PLANS } from '../constants';

interface HostingProps {
  isDark: boolean;
}

const Hosting: React.FC<HostingProps> = ({ isDark }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold">
            <Globe className="w-4 h-4" />
            Managed WordPress & Web Hosting
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Premium Hosting voor <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Elke Groeifase
            </span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Snel, veilig en betrouwbaar. Onze hosting pakketten zijn geoptimaliseerd voor WordPress en statische websites, draaiend op supersnelle NVMe opslag.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOSTING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? (isDark ? 'bg-slate-800 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)]' : 'bg-white border-orange-500 shadow-xl') + ' transform md:-translate-y-4'
                  : isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MEEST GEKOZEN
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                  <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>/maand</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    <div className="p-1 rounded-full bg-green-500/20">
                        <Check className="w-3 h-3 text-green-500" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.highlight
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : isDark 
                    ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
              }`}>
                Kies {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hosting;