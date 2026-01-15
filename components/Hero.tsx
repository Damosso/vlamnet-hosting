import React from 'react';
import { ArrowRight, Activity, Globe, Zap, Shield } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, isDark }) => {
  const serverSlots = Array.from({ length: 8 });

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 transition-colors duration-700 ${
        isDark ? 'bg-orange-600/10' : 'bg-orange-200/40'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[130px] -z-10 transition-colors duration-700 ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-100/40'
      }`} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
            isDark ? 'bg-white/5 border-white/10 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600'
          }`}>
            <Zap className="w-3 h-3 fill-current" />
            Performance First Hosting
          </div>

          <h1 className={`text-5xl md:text-7xl font-extrabold leading-[1.1] transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">
              VlamNet Hosting
            </span>
          </h1>
          
          <p className={`text-xl max-w-xl leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            Geef je project de snelheid die het verdient. Premium <strong>Hetzner NVMe</strong> opslag, 
            DDoS bescherming en <strong>Managed Support</strong> voor een zorgeloze ervaring.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => onNavigate('hosting')}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 active:scale-95"
            >
              Start Direct
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => onNavigate('vps')}
              className={`px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border active:scale-95 ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 text-white border-white/10' 
                  : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              Managed VPS
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Real-time Monitoring</span>
            </div>
          </div>
        </div>

        {/* Right Visual - Fancy 2D Dashboard */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
            
            {/* The Main "Chassis" */}
            <div className={`relative w-80 md:w-96 rounded-3xl border-2 transition-all duration-500 overflow-hidden shadow-2xl ${
              isDark ? 'bg-slate-950 border-white/10 shadow-black' : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
                {/* Internal Glow */}
                <div className={`absolute inset-0 opacity-20 pointer-events-none ${
                    isDark ? 'bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20' : 'bg-gradient-to-tr from-orange-100/50 via-transparent to-blue-100/50'
                }`} />

                {/* Scanning Beam */}
                <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent skew-x-12 animate-[scan-line_4s_linear_infinite]" />

                {/* Server Header */}
                <div className={`px-6 py-4 border-b flex items-center justify-between ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50/50'}`}>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>NODE_EU_W1</span>
                </div>

                {/* Server Content */}
                <div className="p-6 space-y-4">
                    {serverSlots.map((_, i) => (
                        <div key={i} className={`flex items-center justify-between h-8 px-4 rounded-lg transition-colors border ${
                            isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'
                        }`}>
                            <div className="flex gap-2 items-center">
                                <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] ${
                                    i % 3 === 0 ? 'bg-green-500 shadow-green-500/50' : i % 3 === 1 ? 'bg-orange-500 animate-pulse shadow-orange-500/50' : 'bg-blue-500 shadow-blue-500/50'
                                }`} />
                                <div className={`w-12 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                                    <div className={`h-full bg-orange-500/50 rounded-full animate-[progress_3s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.2}s`, width: `${30 + Math.random() * 50}%` }} />
                                </div>
                            </div>
                            <div className={`text-[8px] font-mono font-medium ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                                {`0x${Math.floor(Math.random() * 1000).toString(16).toUpperCase()}`}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Overlay */}
                <div className={`px-6 py-6 border-t ${isDark ? 'border-white/5 bg-slate-900/50' : 'border-slate-100 bg-slate-50/80'}`}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>CPU Load</div>
                            <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>12.4%</div>
                        </div>
                        <div className="space-y-1">
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>Network</div>
                            <div className="text-lg font-bold text-orange-500">Active</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orbiting UI Floating Elements */}
            <div className={`absolute -right-6 top-16 p-5 backdrop-blur-xl rounded-2xl border shadow-2xl animate-[float_5s_ease-in-out_infinite] z-20 ${
              isDark ? 'bg-slate-900/90 border-white/10 shadow-orange-500/20' : 'bg-white/90 border-slate-200 shadow-slate-200'
            }`}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-500/20 rounded-xl">
                        <Globe className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <div className={`text-[10px] uppercase tracking-widest font-black ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>Global Core</div>
                        <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Managed Hosting</div>
                    </div>
                </div>
            </div>

            <div className={`absolute -left-6 bottom-24 p-5 backdrop-blur-xl rounded-2xl border shadow-2xl animate-[float_6s_ease-in-out_infinite_reverse] z-20 ${
              isDark ? 'bg-slate-900/90 border-white/10 shadow-blue-500/20' : 'bg-white/90 border-slate-200 shadow-slate-200'
            }`}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                        <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <div className={`text-[10px] uppercase tracking-widest font-black ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>Speed tier</div>
                        <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>NVMe Performance</div>
                    </div>
                </div>
            </div>

            {/* Background Aesthetic Lines */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className={isDark ? 'text-white/20' : 'text-slate-300'} />
                <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className={isDark ? 'text-white/10' : 'text-slate-200'} />
            </svg>
        </div>

      </div>
      
      <style>{`
        @keyframes scan-line {
            0% { left: -100px; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 500px; opacity: 0; }
        }

        @keyframes progress {
            0%, 100% { transform: scaleX(1); opacity: 1; }
            50% { transform: scaleX(0.8); opacity: 0.6; }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;