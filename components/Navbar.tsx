import React, { useState } from 'react';
import { Flame, Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isDark, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className={`relative w-full max-w-5xl backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl flex items-center justify-between transition-all duration-300 ${
        isDark 
          ? 'bg-slate-900/80 border-white/10 text-white' 
          : 'bg-white/80 border-slate-200 text-slate-900'
      }`}>
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNav('home')}
        >
          <div className="bg-gradient-to-tr from-orange-600 to-yellow-500 p-1.5 rounded-full">
            <Flame className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Vlam<span className="text-orange-500">Net</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.id 
                  ? 'text-orange-500' 
                  : isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => handleNav('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            Offerte
          </button>
          <button 
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-100 text-slate-500'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={onToggleTheme}
            className={`p-2 rounded-full ${isDark ? 'text-gray-400' : 'text-slate-500'}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`absolute top-24 left-4 right-4 rounded-2xl p-6 shadow-xl border md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 transition-colors duration-300 ${
          isDark ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-200'
        }`}>
          {NAV_LINKS.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`text-lg font-medium w-full text-left py-2 ${
                currentPage === link.id 
                  ? 'text-orange-500' 
                  : isDark ? 'text-gray-200 hover:text-orange-500' : 'text-slate-700 hover:text-orange-500'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className={`h-px my-2 ${isDark ? 'bg-white/10' : 'bg-slate-100'}`} />
          <button 
            onClick={() => handleNav('contact')}
            className="bg-orange-500 w-full py-3 rounded-xl text-white font-bold"
          >
            Offerte aanvragen
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;