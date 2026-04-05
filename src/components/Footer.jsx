import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-2xl tracking-tighter">VS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tight leading-none">VS ENGINEERING</span>
                <span className="text-cyan-500 font-bold text-[10px] tracking-[0.2em] uppercase mt-1">Global Solutions</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              A multidisciplinary engineering firm providing end-to-end solutions across civil, architectural, structural, and MEP domains.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-cyan-500 transition-colors group font-medium">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Services</h3>
            <ul className="space-y-4">
              {[
                'Project Management',
                'Civil Construction',
                'MEP Solutions',
                'Architectural Design',
                'Manpower Supply',
                'IT & Technology',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="flex items-center gap-2 hover:text-cyan-500 transition-colors group font-medium">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-cyan-500 shrink-0" size={20} />
                <p className="text-slate-400 font-medium">123 Business Hub, Sector 62, Noida, UP, India</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-cyan-500 shrink-0" size={20} />
                <p className="text-slate-400 font-medium">+91 123 456 7890</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-cyan-500 shrink-0" size={20} />
                <p className="text-slate-400 font-medium">info@vsengineering.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            &copy; {currentYear} VS Engineering & Overseas Manpower Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
