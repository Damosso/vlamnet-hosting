import React from 'react';
import { Flame } from 'lucide-react';

interface FooterProps {
  isDark?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark = true }) => {
  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <div className="bg-gradient-to-tr from-orange-600 to-yellow-500 p-1.5 rounded-full">
                <Flame className="w-4 h-4 text-white fill-current" />
             </div>
             <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Vlam<span className="text-orange-500">Net</span>
             </span>
          </div>
          
          <div className={`text-sm transition-colors ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} VlamNet Hosting & Development. Alle rechten voorbehouden.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>Privacy</a>
            <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>Terms</a>
            <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;