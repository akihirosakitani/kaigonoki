import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './UI';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'ホーム', path: '/' },
  { label: '私たちについて', path: '/about' },
  { label: '取り組み', path: '/services' },
  { label: '記事一覧', path: 'https://note.com/kaigo_no_ki', isExternal: true },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-600 bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                item.isExternal ? (
                  <a 
                    key={item.path} 
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-orange-500 font-medium transition-colors flex items-center gap-1"
                  >
                    {item.label} <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={`text-slate-600 hover:text-orange-500 font-medium transition-colors ${location.pathname === item.path ? 'text-orange-500' : ''}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button href="/contact" size="sm">お問い合わせ</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-600 hover:text-orange-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg p-4 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
               item.isExternal ? (
                 <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-md font-medium"
                 >
                   {item.label} (Note)
                 </a>
               ) : (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-md font-medium"
                >
                  {item.label}
                </Link>
               )
            ))}
            <div className="px-4 pt-2">
              <Button href="/contact" className="w-full">お問い合わせ</Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-white mb-4">
                <span className="text-xl tracking-tight">介護の「キ」</span>
              </div>
              <p className="text-orange-100 leading-relaxed max-w-sm mb-6">
                介護職に就く人・働く人、施設を探す本人や家族へ。<br/>
                気持ちと基本で、介護をつなぐ情報サイト。
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center hover:bg-orange-700 transition-colors" aria-label="Twitter">
                  <Twitter size={20} className="text-orange-100" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center hover:bg-orange-700 transition-colors" aria-label="Instagram">
                  <Instagram size={20} className="text-orange-100" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-teal-200">サイトマップ</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-orange-100 hover:text-white transition-colors">ホーム</Link></li>
                <li><Link to="/about" className="text-orange-100 hover:text-white transition-colors">私たちについて</Link></li>
                <li><Link to="/services" className="text-orange-100 hover:text-white transition-colors">取り組み</Link></li>
                <li><a href="https://note.com/kaigo_no_ki" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white transition-colors">公式Note</a></li>
                <li><Link to="/contact" className="text-orange-100 hover:text-white transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-teal-200">法的情報</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-orange-100 hover:text-white transition-colors">プライバシーポリシー</Link></li>
                <li><Link to="/disclaimer" className="text-orange-100 hover:text-white transition-colors">免責事項</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-orange-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-orange-200">
            <p>&copy; {new Date().getFullYear()} Kaigo no Ki. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};