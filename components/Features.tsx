import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50" id="hosting">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-slate-800/40 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-800/60 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white cursor-pointer transition-colors">
                  Meer info
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;