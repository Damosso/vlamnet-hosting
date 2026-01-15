import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import ManagedVPS from './pages/ManagedVPS';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} isDark={isDark} />;
      case 'hosting':
        return <Hosting isDark={isDark} />;
      case 'vps':
        return <ManagedVPS isDark={isDark} />;
      case 'contact':
        return <Contact isDark={isDark} />;
      default:
        return <Home onNavigate={setCurrentPage} isDark={isDark} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#0f172a] text-white' 
        : 'bg-slate-50 text-slate-900'
    } selection:bg-orange-500 selection:text-white`}>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        {renderPage()}
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;