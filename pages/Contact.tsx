import React from 'react';
import { CONTACT_INFO } from '../constants';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div className="space-y-8">
          <h1 className={`text-4xl font-extrabold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Kom in contact</h1>
          <p className={`text-lg leading-relaxed transition-colors ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Heb je een vraag over onze hosting pakketten of wil je advies over welke VPS het beste bij jouw project past? Wij staan voor je klaar.
          </p>
          
          <div className="space-y-6 pt-8">
            {CONTACT_INFO.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                  isDark ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>
                <span className={`font-medium transition-colors ${isDark ? 'text-white' : 'text-slate-700'}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Column */}
        <div className={`border p-8 rounded-3xl transition-all ${
          isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Naam</label>
                <input type="text" className={`w-full rounded-xl p-3 focus:outline-none focus:border-orange-500 transition-all ${
                  isDark ? 'bg-slate-800 border border-white/10 text-white' : 'bg-slate-50 border border-slate-200 text-slate-900'
                }`} placeholder="Je naam" />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Email</label>
                <input type="email" className={`w-full rounded-xl p-3 focus:outline-none focus:border-orange-500 transition-all ${
                  isDark ? 'bg-slate-800 border border-white/10 text-white' : 'bg-slate-50 border border-slate-200 text-slate-900'
                }`} placeholder="Je email adres" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Onderwerp</label>
              <select className={`w-full rounded-xl p-3 focus:outline-none focus:border-orange-500 transition-all ${
                isDark ? 'bg-slate-800 border border-white/10 text-white' : 'bg-slate-50 border border-slate-200 text-slate-900'
              }`}>
                <option>Algemene vraag</option>
                <option>Offerte aanvraag</option>
                <option>Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Bericht</label>
              <textarea rows={4} className={`w-full rounded-xl p-3 focus:outline-none focus:border-orange-500 transition-all ${
                isDark ? 'bg-slate-800 border border-white/10 text-white' : 'bg-slate-50 border border-slate-200 text-slate-900'
              }`} placeholder="Hoe kunnen we je helpen?"></textarea>
            </div>

            <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20">
              Verstuur Bericht
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;