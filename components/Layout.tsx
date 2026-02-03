import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${isActive
      ? 'text-primary font-bold'
      : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${isActive
      ? 'bg-primary/10 text-primary'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Parallel Four Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
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
                <img
                  src="/logo.png"
                  alt="Parallel Four Logo"
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold font-display">Parallel Four</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Providing safe, comfortable, and modern accommodation for students in Nairobi. Your home away from home.
              </p>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/ParallelFour/61555880228127/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-[#1877F2] transition-all duration-300 text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/p/DGlQnqbJssV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all duration-300 text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="https://x.com/PHostels?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-black transition-all duration-300 text-white"
                  aria-label="Twitter/X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/parallel-four-5113ba213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-[#0A66C2] transition-all duration-300 text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
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

            {/* Map Embed */}
            <div className="overflow-hidden rounded-xl bg-slate-800 h-40 relative group border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Parallel+Four+Building,Nairobi+Kenya&center=-1.315855,36.816532&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parallel Four Location Map"
                className="opacity-90 group-hover:opacity-100 transition duration-300"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/9hZsin9FTn8Bcget8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition pointer-events-none"
              >
                <button className="pointer-events-auto rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-lg hover:scale-105 transition active:scale-95">
                  View on Map
                </button>
              </a>
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