import React from 'react';
import Hero from '../components/Hero';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  isDark: boolean;
}

const Home: React.FC<HomeProps> = ({ onNavigate, isDark }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} isDark={isDark} />
      
      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/40 border-white/5 hover:border-orange-500/50 hover:bg-slate-800/60' 
                    : 'bg-white border-slate-200 hover:border-orange-500/50 hover:shadow-xl'
                }`}
                onClick={() => service.linkTo && onNavigate(service.linkTo)}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isDark ? 'bg-slate-900 border-white/10' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`leading-relaxed mb-6 transition-colors ${
                    isDark ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  <div className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                    isDark ? 'text-white/50 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'
                  }`}>
                    Meer info
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-6 border-t transition-colors duration-300 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Klaar om te <span className="text-orange-500">Vlammen</span>?
            </h2>
            <p className={`text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                Migreer vandaag nog naar onze high-speed Hetzner servers. 
                Wij regelen de verhuizing van je website of applicatie gratis en zonder downtime.
            </p>
            <button 
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/25 transition-all"
            >
                Start Migratie
            </button>
        </div>
      </section>
    </>
  );
};

export default Home;