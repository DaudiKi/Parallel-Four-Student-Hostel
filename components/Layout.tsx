import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-primary font-bold'
        : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      isActive
        ? 'bg-primary/10 text-primary'
        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-xl">apartment</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
              Parallel Four
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/rooms" className={navLinkClass}>Rooms</NavLink>
            <NavLink to="/amenities" className={navLinkClass}>Amenities</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex size-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform duration-500 rotate-0 dark:-rotate-180">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>

            <Link 
              to="/contact"
              className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-dark shadow-sm hover:shadow-md"
            >
              Book a Visit
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="space-y-1 px-4 py-3 pb-6">
              <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>Home</NavLink>
              <NavLink to="/rooms" onClick={closeMenu} className={mobileNavLinkClass}>Rooms</NavLink>
              <NavLink to="/amenities" onClick={closeMenu} className={mobileNavLinkClass}>Amenities</NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={mobileNavLinkClass}>Contact</NavLink>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-bold text-white shadow-sm"
                >
                  Book a Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-3xl text-primary">apartment</span>
                <span className="text-xl font-bold font-display">Parallel Four</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Providing safe, comfortable, and modern accommodation for students in Nairobi. Your home away from home.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <a key={social} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary transition-all duration-300 text-white">
                     <span className="text-xs font-bold uppercase">{social.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link to="/rooms" className="hover:text-primary transition">Our Rooms</Link></li>
                <li><Link to="/amenities" className="hover:text-primary transition">Amenities</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                  <span>Madaraka Estate, <br />Near Strathmore University</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <span>+254 700 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <span>info@parallelfour.com</span>
                </li>
              </ul>
            </div>
            
            {/* Map Mini */}
            <div className="overflow-hidden rounded-xl bg-slate-800 h-40 relative group border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-500"
              />
              <Link to="/contact" className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-lg hover:scale-105 transition active:scale-95">
                  View on Map
                </button>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Parallel Four Student Hostels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;